function renderDestinations() {
  const container = document.getElementById("destination-cards-container");

  if (!container) return;

  destinations.forEach((place) => {
    const cardHTML = `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm rounded-0 bg-white">
                    <img src="${place.image}" class="card-img-top rounded-0" alt="${place.title}" style="height: 250px; object-fit: cover;">
                    <div class="card-body p-4">
                        <small class="text-muted fw-bold"><i class="bi bi-geo-alt-fill text-danger"></i> ${place.location}</small>
                        <h5 class="card-title fw-bold mt-2">${place.title}</h5>
                        <p class="card-text text-muted">${place.description}</p>
                    </div>
                    <div class="card-footer bg-white border-top-0 px-4 pb-4 pt-0 d-flex justify-content-between align-items-center">
                        <small class="text-muted">รีวิวโดย: <strong>${place.author}</strong></small>
                        <a href="place-detail.html?id=${place.id}" class="btn btn-sm btn-dark rounded-0 px-3">อ่านต่อ</a>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += cardHTML;
  });
}
document.addEventListener("DOMContentLoaded", renderDestinations);
