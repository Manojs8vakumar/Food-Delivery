package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    private String tagline;
    private String cuisines;
    private Double rating;
    private String totalReviews;
    private Integer deliveryTimeMin;
    private Double distanceKm;
    private BigDecimal priceForTwo;
    private String address;
    private String area;
    private String city;
    private String imageUrl;
    private String bannerUrl;
    private String discountBadge;

    private boolean isPureVeg;
    private boolean isDelivery;
    private boolean isDining;
    private boolean isNightlife;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @com.fasterxml.jackson.annotation.JsonIgnore
    private List<MenuItem> menuItems = new ArrayList<>();

    public Restaurant() {
    }

    public Restaurant(String name, String slug, String tagline, String cuisines, Double rating, String totalReviews,
                      Integer deliveryTimeMin, Double distanceKm, BigDecimal priceForTwo, String address,
                      String area, String city, String imageUrl, String bannerUrl, String discountBadge,
                      boolean isPureVeg, boolean isDelivery, boolean isDining, boolean isNightlife) {
        this.name = name;
        this.slug = slug;
        this.tagline = tagline;
        this.cuisines = cuisines;
        this.rating = rating;
        this.totalReviews = totalReviews;
        this.deliveryTimeMin = deliveryTimeMin;
        this.distanceKm = distanceKm;
        this.priceForTwo = priceForTwo;
        this.address = address;
        this.area = area;
        this.city = city;
        this.imageUrl = imageUrl;
        this.bannerUrl = bannerUrl;
        this.discountBadge = discountBadge;
        this.isPureVeg = isPureVeg;
        this.isDelivery = isDelivery;
        this.isDining = isDining;
        this.isNightlife = isNightlife;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getCuisines() {
        return cuisines;
    }

    public void setCuisines(String cuisines) {
        this.cuisines = cuisines;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getTotalReviews() {
        return totalReviews;
    }

    public void setTotalReviews(String totalReviews) {
        this.totalReviews = totalReviews;
    }

    public Integer getDeliveryTimeMin() {
        return deliveryTimeMin;
    }

    public void setDeliveryTimeMin(Integer deliveryTimeMin) {
        this.deliveryTimeMin = deliveryTimeMin;
    }

    public Double getDistanceKm() {
        return distanceKm;
    }

    public void setDistanceKm(Double distanceKm) {
        this.distanceKm = distanceKm;
    }

    public BigDecimal getPriceForTwo() {
        return priceForTwo;
    }

    public void setPriceForTwo(BigDecimal priceForTwo) {
        this.priceForTwo = priceForTwo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
    }

    public String getDiscountBadge() {
        return discountBadge;
    }

    public void setDiscountBadge(String discountBadge) {
        this.discountBadge = discountBadge;
    }

    public boolean isPureVeg() {
        return isPureVeg;
    }

    public void setPureVeg(boolean pureVeg) {
        isPureVeg = pureVeg;
    }

    public boolean isDelivery() {
        return isDelivery;
    }

    public void setDelivery(boolean delivery) {
        isDelivery = delivery;
    }

    public boolean isDining() {
        return isDining;
    }

    public void setDining(boolean dining) {
        isDining = dining;
    }

    public boolean isNightlife() {
        return isNightlife;
    }

    public void setNightlife(boolean nightlife) {
        isNightlife = nightlife;
    }

    public List<MenuItem> getMenuItems() {
        return menuItems;
    }

    public void setMenuItems(List<MenuItem> menuItems) {
        this.menuItems = menuItems;
    }

    public void addMenuItem(MenuItem item) {
        menuItems.add(item);
        item.setRestaurant(this);
    }
}
