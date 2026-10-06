package com.example.demo.service;

import com.example.demo.model.Order;
import com.example.demo.model.OrderItem;
import com.example.demo.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(String customerName, String customerPhone, String address,
                            String paymentMethod, String restaurantName, Long restaurantId,
                            List<OrderItem> items, BigDecimal discount) {
        Order order = new Order();
        order.setOrderNumber("RR-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        order.setCustomerName(customerName != null && !customerName.isBlank() ? customerName : "Manoj Kumar");
        order.setCustomerPhone(customerPhone != null && !customerPhone.isBlank() ? customerPhone : "+91 98765 43210");
        order.setDeliveryAddress(address != null && !address.isBlank() ? address : "Flat 402, Green Glen Layout, Bellandur, Bengaluru");
        order.setPaymentMethod(paymentMethod != null ? paymentMethod : "UPI (Google Pay / PhonePe)");
        order.setRestaurantName(restaurantName != null ? restaurantName : "RasoiRush Partner");
        order.setRestaurantId(restaurantId);

        BigDecimal subtotal = BigDecimal.ZERO;
        for (OrderItem item : items) {
            order.addItem(item);
            subtotal = subtotal.add(item.getItemTotal());
        }

        order.setSubtotal(subtotal);
        BigDecimal delivery = subtotal.compareTo(BigDecimal.valueOf(400)) >= 0 ? BigDecimal.ZERO : BigDecimal.valueOf(35);
        BigDecimal platform = BigDecimal.valueOf(7);
        BigDecimal tax = subtotal.multiply(BigDecimal.valueOf(0.05)); // 5% GST on restaurant food
        BigDecimal discountApplied = discount != null ? discount : BigDecimal.ZERO;

        BigDecimal total = subtotal.add(delivery).add(platform).add(tax).subtract(discountApplied);
        if (total.compareTo(BigDecimal.ZERO) < 0) total = BigDecimal.ZERO;

        order.setDeliveryFee(delivery);
        order.setPlatformFee(platform);
        order.setTax(tax);
        order.setDiscountAmount(discountApplied);
        order.setTotalAmount(total);
        order.setStatus("PREPARING");
        order.setCreatedAt(LocalDateTime.now());
        order.setEstimatedDeliveryMinutes(28);

        return orderRepository.save(order);
    }

    public Optional<Order> getOrderByNumber(String orderNumber) {
        return orderRepository.findByOrderNumber(orderNumber);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAllByOrderByCreatedAtDesc();
    }
}
