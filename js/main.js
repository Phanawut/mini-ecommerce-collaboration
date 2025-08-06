document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const loader = document.getElementById('loader');
    let allProducts = [];

    loader.style.display = 'block';

    // โหลดข้อมูลสินค้า
    fetch('js/products.json')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            loader.style.display = 'none';
            displayProducts(allProducts); // ✅ แสดงสินค้าทั้งหมดตอนเริ่มโหลด
        });

    // Event ตอนพิมพ์ค้นหา
    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        // ถ้า input ว่าง → แสดงสินค้าทั้งหมดเหมือนเดิม
        if (keyword === '') {
            displayProducts(allProducts);
            searchResults.style.display = 'none';
            return;
        }

        // ค้นหา
        const filtered = allProducts.filter(p =>
            p.name.toLowerCase().includes(keyword)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<div style="padding: 10px;">ไม่พบสินค้า</div>';
            searchResults.style.display = 'block';
            return;
        }

        // แสดง dropdown แนะนำ
        filtered.slice(0, 10).forEach(product => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
            `;
            item.addEventListener('click', () => {
                displayProducts([product]); // ✅ คลิกแล้วแสดงตัวเดียว
                searchInput.value = product.name;
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    });

    document.addEventListener('DOMContentLoaded', () => {
        const productList = document.getElementById('product-list');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const loader = document.getElementById('loader');
        let allProducts = [];

        loader.style.display = 'block';

        // โหลดข้อมูลสินค้า
        fetch('js/products.json')
            .then(res => res.json())
            .then(data => {
                allProducts = data;
                loader.style.display = 'none';
                displayProducts(allProducts); // ✅ แสดงสินค้าทั้งหมดตอนเริ่มโหลด
            });

        // Event ตอนพิมพ์ค้นหา
        searchInput.addEventListener('input', () => {
            const keyword = searchInput.value.trim().toLowerCase();
            searchResults.innerHTML = '';

            // ถ้า input ว่าง → แสดงสินค้าทั้งหมดเหมือนเดิม
            if (keyword === '') {
                displayProducts(allProducts);
                searchResults.style.display = 'none';
                return;
            }

            // ค้นหา
            const filtered = allProducts.filter(p =>
                p.name.toLowerCase().includes(keyword)
            );

            if (filtered.length === 0) {
                searchResults.innerHTML = '<div style="padding: 10px;">ไม่พบสินค้า</div>';
                searchResults.style.display = 'block';
                return;
            }

            // แสดง dropdown แนะนำ
            filtered.slice(0, 10).forEach(product => {
                const item = document.createElement('div');
                item.className = 'search-item';
                item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
            `;
                item.addEventListener('click', () => {
                    displayProducts([product]); // ✅ คลิกแล้วแสดงตัวเดียว
                    searchInput.value = product.name;
                    searchResults.innerHTML = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(item);
            });

            searchResults.style.display = 'block';
        });

        // ฟังก์ชันแสดงสินค้าในหน้า
        function displayProducts(products) {
            productList.innerHTML = '';
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                const formattedPrice = Number(product.price).toLocaleString();
                card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${formattedPrice} บาท</p>
            `;
                productList.appendChild(card);
            });
        }
    });

    // เมื่อกด Enter บน input
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const keyword = searchInput.value.trim().toLowerCase();
            if (keyword === '') {
                displayProducts(allProducts);
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }

            // ค้นหาสินค้าที่ "ขึ้นต้นด้วย" keyword
            const startsWithFiltered = allProducts.filter(p =>
                p.name.toLowerCase().startsWith(keyword)
            );

            displayProducts(startsWithFiltered);
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
        }
    });

    // ฟังก์ชันแสดงสินค้าในหน้า
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const formattedPrice = Number(product.price).toLocaleString();
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${formattedPrice} บาท</p>
            `;
            productList.appendChild(card);
        });
    }
});

