// ==========================================
// 1. ฟังก์ชันสำหรับหน้าแรก (Home) และหน้ารวม (Destinations)
// ==========================================
function renderDestinations() {
  const homeContainer = document.getElementById("destination-cards-container");
  const allContainer = document.getElementById("all-destinations-container");

  if (!homeContainer && !allContainer) return;

  const createCardHTML = (place) => `
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm rounded-0 bg-white">
                        <img src="${place.image}" class="card-img-top rounded-0" alt="${place.title}" style="height: 250px; object-fit: cover;">
                        <div class="card-body p-4">
                            <small class="text-muted fw-bold"><i class="bi bi-geo-alt-fill text-danger"></i> ${place.location}</small>
                            <h5 class="card-title fw-bold mt-2">${place.title}</h5>
                            <p class="card-text text-muted" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                                ${place.description}
                            </p>
                        </div>
                        <div class="card-footer bg-white border-top-0 px-4 pb-4 pt-0 d-flex justify-content-between align-items-center">
                            <small class="text-muted"><i class="bi bi-tag me-1"></i>${place.category}</small>
                            <a href="place-detail.html?id=${place.id}" class="btn btn-sm btn-dark rounded-0 px-3">อ่านต่อ</a>
                        </div>
                    </div>
                </div>
            `;

  if (homeContainer) {
    homeContainer.innerHTML = "";
    const featuredPlaces = destinations.slice(0, 3);
    featuredPlaces.forEach((place) => {
      homeContainer.innerHTML += createCardHTML(place);
    });
  }

  if (allContainer) {
    allContainer.innerHTML = "";
    destinations.forEach((place) => {
      allContainer.innerHTML += createCardHTML(place);
    });
  }
}

// ==========================================
// 2. ฟังก์ชันสำหรับหน้ารายละเอียดสถานที่ (Place Detail)
// ==========================================
function renderPlaceDetail() {
  const detailContainer = document.getElementById("place-detail-container");
  const postsContainer = document.getElementById("related-posts-container");
  const reviewsSection = document.getElementById("reviews-section");

  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get("id");
  const place = destinations.find((p) => p.id === placeId);

  if (place) {
    document.title = `${place.title} | TraWorlding`;

    detailContainer.innerHTML = `
                  <div class="row g-5">
                      <div class="col-lg-7">
                          <img src="${place.image}" class="img-fluid rounded-0 shadow-sm w-100" style="max-height: 500px; object-fit: cover;">
                      </div>
                      <div class="col-lg-5">
                          <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="destinations.html" class="text-dark text-decoration-none">ที่เที่ยว</a></li>
                                <li class="breadcrumb-item active">${place.title}</li>
                            </ol>
                          </nav>
                          <h1 class="display-5 fw-bold mb-3">${place.title}</h1>
                          <p class="text-muted mb-4" style="line-height: 1.8;">${place.description}</p>
                          
                          <a href="map.html?lat=${place.coords.lat}&lng=${place.coords.lng}" class="btn btn-success rounded-0 w-100 py-3 mb-3 fw-bold">
                              <i class="bi bi-geo-alt-fill me-2"></i> ดูตำแหน่งบนแผนที่ (Go to Map)
                          </a>
                          <button class="btn btn-outline-dark rounded-0 w-100 py-3 fw-bold" onclick="alert('บันทึกสถานที่ลงในรายการโปรดแล้ว!')">
                              <i class="bi bi-bookmark me-2"></i> บันทึกสถานที่
                          </button>
                      </div>
                  </div>
              `;

    if (postsContainer && reviewsSection) {
      const relatedPosts = travelerPosts.filter(
        (post) => post.destinationId === placeId
      );
      if (relatedPosts.length > 0) {
        reviewsSection.classList.remove("display-none");
        postsContainer.innerHTML = "";
        relatedPosts.forEach((post) => {
          const traveler = travelers.find((t) => t.id === post.travelerId);
          postsContainer.innerHTML += `
                            <div class="col-md-6">
                                <div class="card border-0 bg-light rounded-0 h-100">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center mb-3">
                                            <img src="${traveler.avatar}" class="rounded-circle me-2" width="45" height="45">
                                            <div>
                                                <h6 class="mb-0 fw-bold">${traveler.name}</h6>
                                                <small class="text-muted">${traveler.bio}</small>
                                            </div>
                                        </div>
                                        <p class="card-text small text-secondary">${post.content}</p>
                                        <img src="${post.image}" class="img-fluid rounded-0 mt-2" style="height: 200px; width: 100%; object-fit: cover;">
                                    </div>
                                </div>
                            </div>
                        `;
        });
      }
    }
  }
}

// ==========================================
// 3. ฟังก์ชันสำหรับหน้า Traveler Board (Community Feed)
// ==========================================
function renderTravelerBoard() {
  const container = document.getElementById("board-container");
  if (!container) return;

  container.innerHTML = "";
  travelerPosts.forEach((post) => {
    const traveler = travelers.find((u) => u.id === post.travelerId);
    const destination = destinations.find((d) => d.id === post.destinationId);

    container.innerHTML += `
              <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                  <a href="place-detail.html?id=${destination.id}">
                    <img src="${post.image}" class="card-img-top rounded-0" alt="post" style="height: 250px; object-fit: cover;">
                  </a>
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <a href="traveler-detail.html?id=${traveler.id}" class="text-decoration-none d-flex align-items-center text-dark">
                          <img src="${traveler.avatar}" class="rounded-circle me-2" width="40" height="40">
                          <div>
                              <h6 class="mb-0 fw-bold">${traveler.name}</h6>
                              <small class="text-muted">รีวิวที่: ${destination.title}</small>
                          </div>
                      </a>
                    </div>
                    <p class="card-text text-muted small" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                      ${post.content}
                    </p>
                    <a href="place-detail.html?id=${destination.id}" class="btn btn-sm btn-dark rounded-0 mt-2">ดูสถานที่นี้</a>
                  </div>
                </div>
              </div>
            `;
  });
}

// ==========================================
// 4. ฟังก์ชันสำหรับหน้าแผนที่ (Interactive Map & Search)
// ==========================================
function initMapSearch() {
  const container = document.getElementById("map-locations-container");
  const searchInput = document.getElementById("searchInput");
  const mapIframe = document.getElementById("main-map-iframe");
  if (!container) return;

  const updateMap = (lat, lng) => {
    if (!mapIframe) return;
    // แก้ไขพิกัดให้แสดงผลถูกต้องด้วย Template Literal
    const newMapUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=th&z=15&output=embed`;
    mapIframe.src = newMapUrl;
  };

  const urlParams = new URLSearchParams(window.location.search);
  const latParam = urlParams.get("lat");
  const lngParam = urlParams.get("lng");
  if (latParam && lngParam) {
    updateMap(latParam, lngParam);
  }

  const displayResults = (results) => {
    container.innerHTML = "";
    if (results.length === 0) {
      container.innerHTML =
        "<p class='text-center text-muted py-5'>ไม่พบข้อมูลที่ค้นหา</p>";
      return;
    }

    results.forEach((place) => {
      const card = document.createElement("div");
      card.className =
        "card border-0 shadow-sm rounded-0 bg-white mb-2 location-card";
      card.style.cursor = "pointer";
      card.innerHTML = `
                        <div class="row g-0 align-items-center">
                            <div class="col-4">
                                <img src="${place.image}" class="img-fluid rounded-0 w-100" style="height: 90px; object-fit: cover;">
                            </div>
                            <div class="col-8">
                                <div class="card-body p-2 px-3">
                                    <h6 class="card-title fw-bold mb-0 text-truncate">${place.title}</h6>
                                    <p class="mb-1 text-muted" style="font-size: 0.75rem;">
                                        <i class="bi bi-geo-alt-fill text-danger"></i> ${place.location} | ${place.category}
                                    </p>
                                    <div class="d-flex gap-2">
                                        <a href="place-detail.html?id=${place.id}" class="btn btn-sm btn-dark py-0 px-2" style="font-size: 0.7rem;">ข้อมูล</a>
                                        <a href="${place.mapUrl}" target="_blank" class="btn btn-sm btn-outline-success py-0 px-2" style="font-size: 0.7rem;">นำทาง</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

      card.addEventListener("click", (e) => {
        if (e.target.tagName !== "A") {
          updateMap(place.coords.lat, place.coords.lng);
          document
            .querySelectorAll(".location-card")
            .forEach((c) => c.classList.remove("border-primary", "border-2"));
          card.classList.add("border-primary", "border-2");
        }
      });
      container.appendChild(card);
    });
  };

  displayResults(destinations);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const text = e.target.value.toLowerCase();
      const filtered = destinations.filter(
        (p) =>
          p.title.toLowerCase().includes(text) ||
          p.location.toLowerCase().includes(text) ||
          p.category.toLowerCase().includes(text)
      );
      displayResults(filtered);
    });
  }
}

// ==========================================
// 5. ฟังก์ชันสำหรับหน้า Travelers Profile (travelers.html)
// ==========================================
function renderTravelers() {
  const container = document.getElementById("travelers-container");
  if (!container) return;

  container.innerHTML = "";
  travelers.forEach((traveler) => {
    const reviewCount = travelerPosts.filter(
      (post) => post.travelerId === traveler.id
    ).length;
    container.innerHTML += `
              <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm text-center bg-white rounded-0">
                  <div class="card-body p-5">
                    <img src="${traveler.avatar}" class="rounded-circle mb-4 border border-3 border-light shadow-sm" alt="${traveler.name}" style="width: 120px; height: 120px; object-fit: cover" />
                    <h4 class="card-title fw-bold">${traveler.name}</h4>
                    <h6 class="text-success mb-3" style="font-size: 0.85rem"><i class="bi bi-patch-check-fill"></i> Verified Explorer</h6>
                    <p class="card-text text-muted mb-4" style="font-size: 0.95rem">"${traveler.bio}"</p>
                    <div class="d-flex justify-content-center border-top border-bottom py-3 mb-4">
                      <div class="px-3">
                        <h5 class="fw-bold mb-0">${reviewCount}</h5>
                        <small class="text-muted">รีวิวทั้งหมด</small>
                      </div>
                    </div>
                    <a href="traveler-detail.html?id=${traveler.id}" class="btn btn-outline-dark rounded-0 px-4 w-100">ดูโปรไฟล์ส่วนตัว</a>
                  </div>
                </div>
              </div>
            `;
  });
}

// ==========================================
// 6. ฟังก์ชันสำหรับหน้าโปรไฟล์รายบุคคล (traveler-detail.html)
// ==========================================
function renderTravelerDetail() {
  const profileContainer = document.getElementById(
    "traveler-profile-container"
  );
  const postsContainer = document.getElementById("traveler-posts-container");
  const postsSection = document.getElementById("traveler-posts-section");

  if (!profileContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const traveler = travelers.find((u) => u.id === userId);

  if (traveler) {
    document.title = `${traveler.name} | TraWorlding`;
    profileContainer.innerHTML = `
              <div class="row align-items-center g-4">
                <div class="col-md-3 text-center">
                  <img src="${traveler.avatar}" class="rounded-circle shadow-sm border border-4 border-white" width="180" height="180" style="object-fit: cover;">
                </div>
                <div class="col-md-9">
                  <h1 class="fw-bold mb-2">${traveler.name}</h1>
                  <p class="text-muted lead mb-3">${traveler.bio}</p>
                  <div class="d-flex gap-3">
                    <span class="badge bg-dark rounded-0 px-3 py-2">Verified Explorer</span>
                    <span class="text-muted small"><i class="bi bi-geo-alt-fill text-danger"></i> นักเดินทางสายธรรมชาติ</span>
                  </div>
                </div>
              </div>`;

    const myPosts = travelerPosts.filter((post) => post.travelerId === userId);

    if (myPosts.length > 0) {
      if (postsSection) postsSection.classList.remove("display-none");
      if (postsContainer) {
        postsContainer.innerHTML = "";
        myPosts.forEach((post) => {
          const dest = destinations.find((d) => d.id === post.destinationId);
          postsContainer.innerHTML += `
                          <div class="col-md-4">
                            <div class="card border-0 shadow-sm h-100 rounded-0">
                              <img src="${
                                post.image
                              }" class="card-img-top rounded-0" style="height: 200px; object-fit: cover;">
                              <div class="card-body">
                                <small class="text-primary fw-bold">${
                                  dest ? dest.title : "สถานที่ท่องเที่ยว"
                                }</small>
                                <p class="card-text mt-2 small text-muted">${
                                  post.content
                                }</p>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                  <small class="text-muted">${post.date}</small>
                                  <a href="place-detail.html?id=${
                                    post.destinationId
                                  }" class="btn btn-sm btn-link text-dark p-0 text-decoration-none fw-bold">ดูสถานที่</a>
                                </div>
                              </div>
                            </div>
                          </div>`;
        });
      }
    } else {
      if (postsContainer)
        postsContainer.innerHTML =
          "<p class='text-muted'>ยังไม่มีโพสต์รีวิวในขณะนี้</p>";
    }
  }
}

// ==========================================
// 7. ฟังก์ชันกรองหมวดหมู่ (Destinations Filter)
// ==========================================
function filterDestinations(category) {
  const container = document.getElementById("all-destinations-container");
  if (!container) return;

  const buttons = document.querySelectorAll("#category-filter .btn");
  buttons.forEach((btn) => {
    if (btn.innerText.trim() === category) {
      btn.classList.replace("btn-outline-dark", "btn-dark");
    } else {
      btn.classList.replace("btn-dark", "btn-outline-dark");
    }
  });

  const filtered =
    category === "ทั้งหมด"
      ? destinations
      : destinations.filter((place) => place.category === category);

  renderFilteredList(filtered, container);
}

function renderFilteredList(list, container) {
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML =
      "<div class='col-12 text-center py-5 text-muted'><p>ไม่พบข้อมูลในหมวดหมู่นี้</p></div>";
    return;
  }
  list.forEach((place) => {
    container.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm rounded-0 bg-white">
                    <img src="${place.image}" class="card-img-top rounded-0" style="height: 250px; object-fit: cover;">
                    <div class="card-body p-4">
                        <small class="text-muted fw-bold"><i class="bi bi-geo-alt-fill text-danger"></i> ${place.location}</small>
                        <h5 class="card-title fw-bold mt-2">${place.title}</h5>
                        <p class="card-text text-muted small">${place.description}</p>
                    </div>
                    <div class="card-footer bg-white border-top-0 px-4 pb-4 pt-0">
                        <a href="place-detail.html?id=${place.id}" class="btn btn-sm btn-dark rounded-0 w-100">อ่านต่อ</a>
                    </div>
                </div>
            </div>`;
  });
}

// ==========================================
// ฟังก์ชันจัดการสีเมนู Active อัตโนมัติ (ฉบับแก้ไขสีเพี้ยน)
// ==========================================
function setActiveNavbar() {
  // 1. ดึงชื่อไฟล์ปัจจุบัน (เช่น index.html)
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // 2. เลือกทุกลิงก์ที่มีคลาส .nav-link ใน Navbar
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // 3. ตรวจสอบเงื่อนไขหน้าปัจจุบัน (รวมถึงหน้าละเอียดที่ต้องไฮไลท์เมนูหลัก)
    const isDestinations =
      (page === "destinations.html" || page === "place-detail.html") &&
      href === "destinations.html";
    const isCommunity =
      (page === "traveler-board.html" ||
        page === "travelers.html" ||
        page === "traveler-detail.html") &&
      href === "traveler-board.html";
    const isCurrentPage = page === href || isDestinations || isCommunity;

    // 4. บังคับเปลี่ยนคลาสให้ถูกต้อง (ใช้ add/remove แทน replace เพื่อความชัวร์)
    if (isCurrentPage) {
      link.classList.add("text-primary", "fw-bold");
      link.classList.remove("text-dark");
    } else {
      link.classList.add("text-dark");
      link.classList.remove("text-primary", "fw-bold");
    }
  });
}
// ==========================================
// รวมการทำงานเมื่อโหลดหน้าเสร็จในจุดเดียว
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavbar();
  renderDestinations();
  renderPlaceDetail();
  renderTravelerBoard();
  initMapSearch();
  renderTravelers();
  renderTravelerDetail();
});
