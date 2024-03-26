<template>
  <!-- Hero Start -->
  <div class="container-fluid py-5 mb-5 hero-header">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-md-12 col-lg-7">
          <h4 class="mb-3 text-secondary">100% tự nhiên</h4>
          <h1 class="mb-5 display-3 text-primary">Rau củ quả & Trái cây tươi</h1>
          <div class="position-relative mx-auto">
            <input
              class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
              type="number"
              placeholder="Tìm kiếm"
            />
            <button
              type="submit"
              class="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
              style="top: 0; right: 25%"
            >
              Tìm
            </button>
          </div>
        </div>
        <div class="col-md-12 col-lg-5">
          <div
            id="carouselId"
            class="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active rounded">
                <img
                  src="img/hero-img-1.png"
                  class="img-fluid w-100 h-100 bg-secondary rounded"
                  alt="First slide"
                />
                <a href="#" class="btn px-4 py-2 text-white rounded">Fruites</a>
              </div>
              <div class="carousel-item rounded">
                <img
                  src="img/hero-img-2.png"
                  class="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
                <a href="#" class="btn px-4 py-2 text-white rounded">Vesitables</a>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->

  <!-- Featurs Section Start -->
  <div class="container-fluid featurs py-5">
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i class="fas fa-car-side fa-3x text-white"></i>
            </div>
            <div class="featurs-content text-center">
              <h5>Miễn phí vẫn chuyển</h5>
              <p class="mb-0">Miễn phí vận chuyển cho đơn từ 300.000</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i class="fas fa-user-shield fa-3x text-white"></i>
            </div>
            <div class="featurs-content text-center">
              <h5>Thanh toán bảo mật</h5>
              <p class="mb-0">100% bảo mật thanh toán</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i class="fas fa-exchange-alt fa-3x text-white"></i>
            </div>
            <div class="featurs-content text-center">
              <h5>30 ngày trả hàng</h5>
              <p class="mb-0">30 trả hàng và hoàn tiền</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i class="fa fa-phone-alt fa-3x text-white"></i>
            </div>
            <div class="featurs-content text-center">
              <h5>Hỗ trợ 24/7</h5>
              <p class="mb-0">Hỗ trợ mọi nơi , mọi lúc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Featurs Section End -->

  <!-- Fruits Shop Start-->
  <div class="container-fluid fruite py-5">
    <div class="container py-5">
      <div class="tab-class text-center">
        <div class="row g-4">
          <div class="col-lg-4 text-start">
            <h1>Danh mục sản phẩm</h1>
          </div>
          <div class="col-lg-8 text-end">
            <ul class="nav nav-pills d-inline-flex text-center mb-5">
              <li class="nav-item">
                <a
                  class="d-flex m-2 py-2 bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span class="text-dark" style="width: 130px">Tất cả sản phẩm</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex py-2 m-2 bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <span class="text-dark" style="width: 130px">Rau xanh , rau tươi</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex m-2 py-2 bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <span class="text-dark" style="width: 130px">Rau củ quả</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex m-2 py-2 bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-4"
                >
                  <span class="text-dark" style="width: 130px">Nấm và hạt</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex m-2 py-2 bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-5"
                >
                  <span class="text-dark" style="width: 130px">Rau mùi</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div id="tab-1" class="tab-pane fade show p-0 active">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="row g-4">
                  <div
                    class="col-md-6 col-lg-4 col-xl-3"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        
                        <router-link  :to="'/detail/' + product.id">
                          <img
                            :src="'img/' + product.image"
                            class="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </router-link>
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ product.category }}
                      </div>
                      <div
                        class="p-4 border border-secondary border-top-0 rounded-bottom"
                      >
                        <h4>{{ product.name }}</h4>
                        <!-- <p>{{ product.description  }}</p> -->

                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }}0đ</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                            cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- rau xanh , rau tươi-->
          <div id="tab-2" class="tab-pane fade show p-0">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="row g-4">
                  <div
                    class="col-md-6 col-lg-4 col-xl-3"
                    v-for="product in tab2Products"
                    :key="product.id"
                  >
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          :src="'img/' + product.image"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ product.category }}
                      </div>
                      <div
                        class="p-4 border border-secondary border-top-0 rounded-bottom"
                      >
                        <h4>{{ product.name }}</h4>

                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }}0đ</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                            cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- rau củ quả-->
          <div id="tab-3" class="tab-pane fade show p-0">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="row g-4">
                  <div
                    class="col-md-6 col-lg-4 col-xl-3"
                    v-for="product in tab3Products"
                    :key="product.id"
                  >
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          :src="'img/' + product.image"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ product.category }}
                      </div>
                      <div
                        class="p-4 border border-secondary border-top-0 rounded-bottom"
                      >
                        <h4>{{ product.name }}</h4>

                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }}0đ</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                            cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Nấm và hạt-->
          <div id="tab-4" class="tab-pane fade show p-0">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="row g-4">
                  <div
                    class="col-md-6 col-lg-4 col-xl-3"
                    v-for="product in tab4Products"
                    :key="product.id"
                  >
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          :src="'img/' + product.image"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ product.category }}
                      </div>
                      <div
                        class="p-4 border border-secondary border-top-0 rounded-bottom"
                      >
                        <h4>{{ product.name }}</h4>

                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }}0đ</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                            cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Rau mùi-->
          <div id="tab-5" class="tab-pane fade show p-0">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="row g-4">
                  <div
                    class="col-md-6 col-lg-4 col-xl-3"
                    v-for="product in tab5Products"
                    :key="product.id"
                  >
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          :src="'img/' + product.image"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ product.category }}
                      </div>
                      <div
                        class="p-4 border border-secondary border-top-0 rounded-bottom"
                      >
                        <h4>{{ product.name }}</h4>

                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }}0đ</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                            cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Fruits Shop End-->

  <!-- Featurs Start -->
  <div class="container-fluid service py-5">
    <div class="container py-5">
      <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4">
          <a href="#">
            <div class="service-item bg-secondary rounded border border-secondary">
              <img src="img/featur-1.jpg" class="img-fluid rounded-top w-100" alt="" />
              <div class="px-4 rounded-bottom">
                <div class="service-content bg-primary text-center p-4 rounded">
                  <h5 class="text-white">Rau sạch</h5>
                  <h3 class="mb-0">Giảm 20%</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="#">
            <div class="service-item bg-dark rounded border border-dark">
              <img src="img/featur-2.jpg" class="img-fluid rounded-top w-100" alt="" />
              <div class="px-4 rounded-bottom">
                <div class="service-content bg-light text-center p-4 rounded">
                  <h5 class="text-primary">Trái cây tươi</h5>
                  <h3 class="mb-0">Dùng thử ngay</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="#">
            <div class="service-item bg-primary rounded border border-primary">
              <img src="img/featur-3.jpg" class="img-fluid rounded-top w-100" alt="" />
              <div class="px-4 rounded-bottom">
                <div class="service-content bg-secondary text-center p-4 rounded">
                  <h5 class="text-white">Rau củ quả</h5>
                  <h3 class="mb-0">Giảm 5%</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Featurs End -->

  <!-- Vesitable Shop Start-->

  <!-- Vesitable Shop End -->

  <!-- Banner Section Start-->
  <div class="container-fluid banner bg-secondary my-5">
    <div class="container py-5">
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <div class="py-4">
            <h1 class="display-3 text-white">Rau hữu cơ tươi</h1>
            <p class="fw-normal display-3 text-dark mb-4">in Our Store</p>
            <p class="mb-4 text-dark">Rau nhập mới mỗi ngày chất lượng tốt nhất</p>
            <a
              href="#"
              class="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
              >MUA NGAY</a
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div class="position-relative">
            <img src="img/baner-1.png" class="img-fluid w-100 rounded" alt="" />
            <div
              class="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
              style="width: 140px; height: 140px; top: 0; left: 0"
            >
              <h1 style="font-size: 100px">1</h1>
              <div class="d-flex flex-column">
                <span class="h2 mb-0">32.000</span>
                <span class="h4 text-muted mb-0">/kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner Section End -->

  <!-- Bestsaler Product Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="text-center mx-auto mb-5" style="max-width: 700px">
        <h1 class="display-4">Sản phẩm bán chạy nhất</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-6 col-xl-4" v-for="product in tab2Products" :key="product.id">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img
                  :src="'img/' + product.image"
                  class="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div class="col-6">
                <a href="#" class="h5">{{ product.name }}</a>
                <div class="d-flex my-3">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="mb-3">{{ product.price }}0đ</h4>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-xl-4" v-for="product in tab4Products" :key="product.id">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img
                  :src="'img/' + product.image"
                  class="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div class="col-6">
                <a href="#" class="h5">{{ product.name }}</a>
                <div class="d-flex my-3">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="mb-3">{{ product.price }}0đ</h4>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bestsaler Product End -->

  <!-- Fact Start -->
  <div class="container-fluid py-5">
    <div class="container">
      <div class="bg-light p-5 rounded">
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="counter bg-white rounded p-5">
              <i class="fa fa-users text-secondary"></i>
              <h4>KHÁCH HÀNG HÀI LÒNG</h4>
              <h1>1963</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="counter bg-white rounded p-5">
              <i class="fa fa-users text-secondary"></i>
              <h4>CHẤT LƯỢNG DỊCH VỤ</h4>
              <h1>99%</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="counter bg-white rounded p-5">
              <i class="fa fa-users text-secondary"></i>
              <h4>GIẤY CHỨNG NHẬN CHẤT LƯỢNG</h4>
              <h1>33</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="counter bg-white rounded p-5">
              <i class="fa fa-users text-secondary"></i>
              <h4>SẢN PHẨM CÓ SẴN</h4>
              <h1>789</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Fact Start -->

  <!-- Tastimonial Start -->
  <div class="container-fluid testimonial py-5">
    <div class="container py-5">
      <div class="testimonial-header text-center">
        <h4 class="text-primary">Lời chứng thực của chúng tôi</h4>
        <h1 class="display-5 mb-5 text-dark">Khách hàng của chúng tôi nói!</h1>
      </div>
      <div class="owl-carousel testimonial-carousel">
        <div class="testimonial-item img-border-radius bg-light rounded p-4">
          <div class="position-relative">
            <i
              class="fa fa-quote-right fa-2x text-secondary position-absolute"
              style="bottom: 30px; right: 0"
            ></i>
            <div class="mb-4 pb-4 border-bottom border-secondary"></div>
            <div class="d-flex align-items-center flex-nowrap">
              <div class="bg-secondary rounded">
                <img
                  src="img/testimonial-1.jpg"
                  class="img-fluid rounded"
                  style="width: 100px; height: 100px"
                  alt=""
                />
              </div>
              <div class="ms-4 d-block">
                <h4 class="text-dark">Client Name</h4>
                <p class="m-0 pb-3">Profession</p>
                <div class="d-flex pe-5">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-item img-border-radius bg-light rounded p-4">
          <div class="position-relative">
            <i
              class="fa fa-quote-right fa-2x text-secondary position-absolute"
              style="bottom: 30px; right: 0"
            ></i>
            <div class="mb-4 pb-4 border-bottom border-secondary">
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div class="d-flex align-items-center flex-nowrap">
              <div class="bg-secondary rounded">
                <img
                  src="img/testimonial-1.jpg"
                  class="img-fluid rounded"
                  style="width: 100px; height: 100px"
                  alt=""
                />
              </div>
              <div class="ms-4 d-block">
                <h4 class="text-dark">Client Name</h4>
                <p class="m-0 pb-3">Profession</p>
                <div class="d-flex pe-5">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-item img-border-radius bg-light rounded p-4">
          <div class="position-relative">
            <i
              class="fa fa-quote-right fa-2x text-secondary position-absolute"
              style="bottom: 30px; right: 0"
            ></i>
            <div class="mb-4 pb-4 border-bottom border-secondary">
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div class="d-flex align-items-center flex-nowrap">
              <div class="bg-secondary rounded">
                <img
                  src="img/testimonial-1.jpg"
                  class="img-fluid rounded"
                  style="width: 100px; height: 100px"
                  alt=""
                />
              </div>
              <div class="ms-4 d-block">
                <h4 class="text-dark">Client Name</h4>
                <p class="m-0 pb-3">Profession</p>
                <div class="d-flex pe-5">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Tastimonial End -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
  computed: {
    tab2Products() {
      // Lọc và trả về các sản phẩm có ID từ 1 đến 4
      return this.products.filter((product) => product.id >= 1 && product.id <= 4);
    },
    tab3Products() {
      // Lọc và trả về các sản phẩm có ID từ 5 đến 8
      return this.products.filter((product) => product.id >= 5 && product.id <= 8);
    },
    tab4Products() {
      // Lọc và trả về các sản phẩm có ID từ 9 đến 12
      return this.products.filter((product) => product.id >= 9 && product.id <= 12);
    },
    tab5Products() {
      // Lọc và trả về các sản phẩm có ID từ 13 đến 16
      return this.products.filter((product) => product.id >= 13 && product.id <= 16);
    },
  },
};
</script>

<style></style>
