// File chứa dữ liệu sản phẩm, cửa hàng, tin tức
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Cà phê Phin truyền thống",
        price: 35000,
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Hương vị đậm đà, đắng nhẹ kèm hậu vị ngọt thanh đặc trưng của cà phê Việt. Được pha chế theo phương pháp truyền thống với phin nhôm, mang đến trải nghiệm cà phê thuần Việt.",
        category: "coffee",
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: "Bạc xỉu",
        price: 45000,
        image: "https://inlysugiare.vn/wp-content/uploads/2020/05/ly-ca-phe-bac-xiu-da.jpg",
        description: "Sự kết hợp hoàn hảo giữa cà phê đậm vị và sữa tươi ngọt ngào. Bạc xỉu là thức uống yêu thích của nhiều người với vị ngọt dịu từ sữa đặc và sữa tươi, hòa quyện cùng hương thơm nồng của cà phê.",
        category: "special",
        rating: 4.0,
        reviews: 95
    },
    {
        id: 3,
        name: "Cold Brew",
        price: 55000,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "Cà phê ủ lạnh trong 12 tiếng, mang đến hương vị tinh khiết và mát lạnh. Phương pháp ủ lạnh giúp chiết xuất các tinh chất cà phê một cách từ từ, tạo nên hương vị đậm đà nhưng ít axit, rất dễ uống.",
        category: "cold",
        rating: 5.0,
        reviews: 156
    },
    {
        id: 4,
        name: "Espresso",
        price: 40000,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Ly cà phê đậm đặc với hương thơm nồng nàn và vị đắng mạnh mẽ. Espresso là nền tảng của nhiều loại cà phê khác, được pha chế bằng cách cho nước nóng đi qua cà phê xay mịn dưới áp suất cao.",
        category: "coffee",
        rating: 4.5,
        reviews: 112
    },
        {
        id: 5,
        name: "Cappuccino",
        price: 50000,
        image: "https://images8.alphacoders.com/571/571535.jpg",
        description: "Sự kết hợp hoàn hảo giữa espresso, sữa nóng và bọt sữa mịn. Cappuccino có lớp bọt sữa dày và hương vị cân bằng giữa đắng và ngọt.",
        category: "special",
        rating: 4.7,
        reviews: 89
    },
    {
        id: 6,
        name: "Latte",
        price: 52000,
        image: "https://cornercoffeestore.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",
        description: "Espresso với lượng sữa nóng nhiều hơn, tạo nên hương vị nhẹ nhàng và creamy. Thường được trang trí với nghệ thuật latte tinh tế.",
        category: "special",
        rating: 4.6,
        reviews: 134
    },
    {
        id: 7,
        name: "Americano",
        price: 38000,
        image: "https://exquisite-taste-magazine.com/wp-content/uploads/2015/12/Americano.jpg",
        description: "Espresso pha loãng với nước nóng, mang đến hương vị cà phê đậm đà nhưng nhẹ nhàng hơn. Lựa chọn hoàn hảo cho những ai thích cà phê đen.",
        category: "coffee",
        rating: 4.3,
        reviews: 78
    },
    {
        id: 8,
        name: "Mocha",
        price: 58000,
        image: "https://midwestniceblog.com/wp-content/uploads/2023/06/homemade-mocha-recipe.jpg",
        description: "Sự kết hợp tuyệt vời giữa espresso, sô cô la và sữa. Mocha mang đến hương vị ngọt ngào, đậm đà với sự hài hòa giữa vị đắng cà phê và ngọt ngào của sô cô la.",
        category: "special",
        rating: 4.8,
        reviews: 167
    },
    {
        id: 9,
        name: "Cà phê Sữa Đá",
        price: 32000,
        image: "https://giacaphe.com/wp-content/uploads/2023/03/ca-phe-sua-da-2.jpg",
        description: "Cà phê đá pha với sữa đặc, thức uống quen thuộc của người Việt. Vị đắng nhẹ của cà phê hòa quyện với vị ngọt béo của sữa đặc, thêm đá lạnh tươi mát.",
        category: "coffee",
        rating: 4.4,
        reviews: 245
    },
    {
        id: 10,
        name: "Flat White",
        price: 48000,
        image: "https://handall.id/wp-content/uploads/2023/06/FLAT_WHITE.webp",
        description: "Espresso với lớp microfoam mịn màng, ít bọt hơn cappuccino. Mang đến hương vị cà phê đậm đà với kết cấu sữa mượt mà.",
        category: "special",
        rating: 4.5,
        reviews: 92
    },
    {
        id: 11,
        name: "Cà phê Trứng",
        price: 42000,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "Cà phê truyền thống kết hợp với lớp trứng bông mềm mịn trên mặt. Hương vị độc đáo với vị béo ngậy của trứng và đắng nhẹ của cà phê.",
        category: "special",
        rating: 4.6,
        reviews: 113
    },
    {
        id: 12,
        name: "Iced Latte",
        price: 52000,
        image: "https://www.pumpkinnspice.com/wp-content/uploads/2022/07/IMG_1386.jpg",
        description: "Latte phiên bản lạnh với đá viên, hoàn hảo cho những ngày nóng. Vẫn giữ được hương vị thơm ngon của latte truyền thống nhưng mát lạnh và sảng khoái.",
        category: "cold",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 13,
        name: "Cà phê Muối",
        price: 38000,
        image: "https://tamlong.com.vn/wp-content/uploads/ca-phe-kem-muoi.jpg",
        description: "Cà phê đá với một chút muối, làm nổi bật hương vị cà phê và giảm vị đắng. Trải nghiệm độc đáo từ Huế, mang đến hương vị khó quên.",
        category: "coffee",
        rating: 4.2,
        reviews: 67
    },
    {
        id: 14,
        name: "Vanilla Latte",
        price: 55000,
        image: "https://www.sessioncoffeedenver.com/wp-content/uploads/2025/03/Bourbon-Vanilla-Latte-Recipe.jpg",
        description: "Latte với hương vanila thơm ngát, tạo nên hương vị ngọt ngào và ấm áp. Hoàn hảo cho những ai yêu thích vị ngọt dịu nhẹ.",
        category: "special",
        rating: 4.5,
        reviews: 124
    },
    {
        id: 15,
        name: "Cà phê Dừa",
        price: 45000,
        image: "https://www.lacademie.com/wp-content/uploads/2023/04/vietnamese-coconut-coffee-recipe.jpg",
        description: "Cà phê kết hợp với nước cốt dừa tươi, mang đến hương vị nhiệt đới độc đáo. Vị béo ngậy của dừa hòa quyện hoàn hảo với vị đắng của cà phê.",
        category: "special",
        rating: 4.4,
        reviews: 88
    },
    {
        id: 16,
        name: "Iced Americano",
        price: 40000,
        image: "https://i0.wp.com/www.yesmooretea.com/wp-content/uploads/2021/11/Iced-Americano-7.jpg?resize=1024%2C1536&ssl=1",
        description: "Americano phiên bản lạnh, đơn giản nhưng đầy tinh tế. Espresso đậm đà pha với nước lạnh và đá, giữ trọn hương vị cà phê nguyên bản.",
        category: "cold",
        rating: 4.3,
        reviews: 95
    },
    {
        id: 17,
        name: "Caramel Macchiato",
        price: 59000,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
        description: "Espresso với sữa vanila và sốt caramel, tạo nên hương vị ngọt ngào quyến rũ. Lớp caramel trên mặt tăng thêm vị giác thú vị.",
        category: "special",
        rating: 4.7,
        reviews: 178
    },
    {
        id: 18,
        name: "Cà phê Cốt Dừa Đá",
        price: 42000,
        image: "https://thuytinhgiare.com/wp-content/uploads/2023/08/Cach-lam-Ca-phe-Cot-dua-da-xay.jpg",
        description: "Cà phê đá truyền thống kết hợp với cốt dừa tươi ngon. Vị béo ngậy của dừa làm dịu đi vị đắng của cà phê, tạo nên sự cân bằng hoàn hảo.",
        category: "cold",
        rating: 4.5,
        reviews: 102
    },
    {
        id: 19,
        name: "Hazelnut Latte",
        price: 56000,
        image: "https://tyberrymuch.com/wp-content/uploads/2024/03/Homemade-Hazelnut-Iced-Coffee.jpg",
        description: "Latte với hương hạt phỉ thơm lừng, mang đến cảm giác ấm áp và thư giãn. Hương vị hấp dẫn cho những ngày cần thêm năng lượng.",
        category: "special",
        rating: 4.6,
        reviews: 134
    },
    {
        id: 20,
        name: "Cà phê Phin Sữa Nóng",
        price: 35000,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Cà phê phin truyền thống pha với sữa đặc và thưởng thức khi còn nóng. Hương vị ấm áp, thơm ngon hoàn hảo cho buổi sáng.",
        category: "coffee",
        rating: 4.4,
        reviews: 156
    }
];

const STORES_DATA = [
    {
        id: 1,
        name: "Mocha Delight Quận 1",
        address: "123 Nguyễn Huệ, P. Bến Nghé, Quận 1, TP.HCM",
        phone: "028 3827 3827",
        hours: "7:00 - 22:00 (T2 - CN)",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
        id: 2,
        name: "Mocha Delight Quận 3",
        address: "456 Lê Văn Sỹ, P. 12, Quận 3, TP.HCM",
        phone: "028 3928 3928",
        hours: "7:00 - 22:00 (T2 - CN)",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
        id: 3,
        name: "Mocha Delight Quận 7",
        address: "789 Nguyễn Văn Linh, P. Tân Phong, Quận 7, TP.HCM",
        phone: "028 5412 5412",
        hours: "7:00 - 22:00 (T2 - CN)",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80"
    }
];

const NEWS_DATA = [
    {
        id: 1,
        title: "Mùa hè rực rỡ - Ưu đãi đến 30%",
        date: "15/06/2023",
        content: "Đón hè sôi động cùng Mocha Delight với hàng loạt ưu đãi hấp dẫn lên đến 30% cho tất cả các sản phẩm",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
        id: 2,
        title: "Workshop Barista chuyên nghiệp",
        date: "02/06/2023",
        content: "Tham gia workshop Barista chuyên nghiệp để học cách pha chế những ly cà phê hoàn hảo từ các chuyên gia",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        title: "Ra mắt dòng cà phê hữu cơ mới",
        date: "20/05/2023",
        content: "Mocha Delight chính thức ra mắt dòng sản phẩm cà phê hữu cơ cao cấp, thân thiện với môi trường",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    }
];