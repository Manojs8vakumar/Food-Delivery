package com.example.demo.controller;

import com.example.demo.model.Order;
import com.example.demo.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Controller
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/checkout")
    public String checkout(Model model) {
        return "checkout";
    }

    @GetMapping("/order/{orderNumber}")
    public String trackOrder(@PathVariable("orderNumber") String orderNumber, Model model) {
        Optional<Order> orderOpt = orderService.getOrderByNumber(orderNumber);
        if (orderOpt.isEmpty()) {
            return "redirect:/";
        }
        model.addAttribute("order", orderOpt.get());
        return "track";
    }

    @GetMapping("/orders")
    public String pastOrders(Model model) {
        List<Order> orders = orderService.getAllOrders();
        model.addAttribute("orders", orders);
        return "orders";
    }
}
