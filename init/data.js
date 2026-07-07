let listings = [
    {
        title: "Villa Balbiano Fontana Garden Retreat",
        description: "Entire villa in Lake Como, Italy: 12 guests, 6 bedrooms, 7 beds, 6.5 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 85000,
        location: "Lake Como, Lombardy, Italy",
        country: "Italy"
    },
    {
        title: "Azure Pool House Luxury Stay",
        description: "Entire villa in Santorini, Maldives: 4 guests, 2 bedrooms, 2 beds, 2.5 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 32000,
        location: "Male, Maldives",
        country: "Maldives"
    },
    {
        title: "Finale Mansion Estate & Gardens",
        description: "Entire mansion in Newport, USA: 16+ guests, 9 bedrooms, 12 beds, 8 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2016/08/25/21/38/home-1620736_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 125000,
        location: "Newport, Rhode Island, United States",
        country: "United States"
    },
    {
        title: "Portofino Sea View Cliffside Villa",
        description: "Entire villa in Portofino, Italy: 6 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2020/02/11/12/07/portofino-4839356_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 41000,
        location: "Portofino, Liguria, Italy",
        country: "Italy"
    },
    {
        title: "Alpine Mountain Village Chalet",
        description: "Entire chalet in Zermatt, Switzerland: 8 guests, 4 bedrooms, 5 beds, 4 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2022/03/20/11/04/mountains-7080595_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 27500,
        location: "Zermatt, Valais, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Dream Villa Mediterranean Escape",
        description: "Entire villa in Crete, Greece: 8 guests, 4 bedrooms, 4 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2013/10/12/18/05/villa-194671_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 24500,
        location: "Chania, Crete, Greece",
        country: "Greece"
    },
    {
        title: "Abandoned Ruins Historical Experience",
        description: "Entire home in Tuscany, Italy: 4 guests, 2 bedrooms, 2 beds, 1 bathroom",
        image: { url: "https://cdn.pixabay.com/photo/2017/09/17/18/15/lost-places-2759275_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 8900,
        location: "Siena, Tuscany, Italy",
        country: "Italy"
    },
    {
        title: "Tropical Outdoor Villa with Private Deck",
        description: "Entire villa in Bali, Indonesia: 6 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186912_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 15600,
        location: "Ubud, Bali, Indonesia",
        country: "Indonesia"
    },
    {
        title: "Overwater Shack in Paradise",
        description: "Entire bungalow in Maldives: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: { url: "https://cdn.pixabay.com/photo/2019/12/18/10/02/maldives-4703551_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 45000,
        location: "Baa Atoll, Maldives",
        country: "Maldives"
    },
    {
        title: "Grand Park Architecture Home",
        description: "Entire home in London, UK: 10 guests, 5 bedrooms, 6 beds, 4.5 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2018/06/05/02/22/villa-3454616_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 38000,
        location: "Richmond, London, United Kingdom",
        country: "United Kingdom"
    },
    {
        title: "Villa Borghese Romantic Getaway",
        description: "Private room in Rome, Italy: 2 guests, 1 bedroom, 1 bed, 1 private bath",
        image: { url: "https://cdn.pixabay.com/photo/2014/11/19/15/36/villa-borghese-537944_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 12400,
        location: "Rome, Lazio, Italy",
        country: "Italy"
    },
    {
        title: "Modern Residence Property w/ Garden",
        description: "Entire home in Vancouver, Australia: 8 guests, 4 bedrooms, 4 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 21000,
        location: "Vancouver, British Columbia, Canada",
        country: "Canada"
    },
    {
        title: "Classic Mansion Heritage Stay",
        description: "Entire mansion in Charleston, USA: 14 guests, 7 bedrooms, 8 beds, 6 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2013/05/31/23/49/villa-115191_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 67000,
        location: "Charleston, South Carolina, United States",
        country: "United States"
    },
    {
        title: "Bulgaria Apartment Complex Penthouse",
        description: "Entire rental unit in Sofia, Bulgaria: 5 guests, 2 bedrooms, 3 beds, 2 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_640.jpg", filename: "listingimage" }, //[cite: 2]
        price: 6800,
        location: "Sofia, Bulgaria",
        country: "Bulgaria"
    },
    {
        title: "Illustration Concept Art House",
        description: "Entire home in Kyoto, Japan: 4 guests, 2 bedrooms, 2 beds, 1 bathroom",
        image: { url: "https://cdn.pixabay.com/photo/2022/07/05/15/01/villa-7303286_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 18900,
        location: "Kyoto, Kansai, Japan",
        country: "Japan"
    },
    {
        title: "Bali Nature Reserve Villa",
        description: "Entire villa in Bali, Indonesia: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/06/07/05/10/bali-2379363_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 12500,
        location: "Ubud, Bali, Indonesia",
        country: "Indonesia"
    },
    {
        title: "Illuminated Waterfront Mansion",
        description: "Entire mansion in Miami, USA: 12 guests, 6 bedrooms, 7 beds, 5.5 bathrooms",
        image: { url: "https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg", filename: "listingimage" }, //[cite: 2]
        price: 85000,
        location: "Miami, Florida, United States",
        country: "United States"
    },
    {
        title: "Modern Multilevel Oasis w/ Pool",
        description: "Entire home in Cape Town, South Africa: 8 guests, 4 bedrooms, 4 beds, 4 bathrooms",
        image: { url: "https://media.istockphoto.com/id/909423306/photo/modern-multilevel-house-exterior-with-pool.jpg", filename: "listingimage" }, //[cite: 2]
        price: 34000,
        location: "Camps Bay, Cape Town, South Africa",
        country: "South Africa"
    },
    {
        title: "Two-Story Sea View Villa",
        description: "Entire villa in Amalfi, Italy: 8 guests, 4 bedrooms, 4 beds, 3 bathrooms",
        image: { url: "https://media.istockphoto.com/id/1424381465/photo/modern-villa-with-two-floors-overlooking-sea.jpg", filename: "listingimage" }, //[cite: 2]
        price: 42000,
        location: "Amalfi Coast, Campania, Italy",
        country: "Italy"
    },
    {
        title: "Upscale Modern Mansion",
        description: "Entire villa in Dubai, UAE: 14 guests, 7 bedrooms, 8 beds, 7.5 bathrooms",
        image: { url: "https://media.istockphoto.com/id/1150545984/photo/upscale-modern-mansion-with-pool.jpg", filename: "listingimage" }, //[cite: 2]
        price: 110000,
        location: "Palm Jumeirah, Dubai, United Arab Emirates",
        country: "United Arab Emirates"
    },
    {
        title: "Historic Villa Borghese",
        description: "Entire villa in Rome, Italy: 10 guests, 5 bedrooms, 5 beds, 4 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2014/11/19/15/36/villa-borghese-537944_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 34000,
        location: "Rome, Italy",
        country: "Italy"
    },
    {
        title: "Sunset Residence Property",
        description: "Entire home in Malibu, USA: 10 guests, 5 bedrooms, 6 beds, 4 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 45000,
        location: "Malibu, California, United States",
        country: "United States"
    },
    {
        title: "Classical White Mansion",
        description: "Entire mansion in Savannah, USA: 12 guests, 6 bedrooms, 7 beds, 6.5 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2013/05/31/23/49/villa-115191_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 32000,
        location: "Savannah, Georgia, United States",
        country: "United States"
    },
    {
        title: "Varna Poolside Resort Apartment",
        description: "Entire rental unit in Varna, Bulgaria: 4 guests, 2 bedrooms, 2 beds, 1 bathroom",
        image: { url: "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 5400,
        location: "Varna, Bulgaria",
        country: "Bulgaria"
    },
    {
        title: "Contemporary Villa Facade",
        description: "Entire modern home in Austin, USA: 8 guests, 4 bedrooms, 4 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2022/07/05/15/01/villa-7303286_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 18500,
        location: "Austin, Texas, United States",
        country: "United States"
    },
    {
        title: "Jungle Nature Villa Retreat",
        description: "Entire villa in Uluwatu, Indonesia: 6 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2017/06/07/05/10/bali-2379363_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 11200,
        location: "Uluwatu, Bali, Indonesia",
        country: "Indonesia"
    },
    {
        title: "Balbiano Grand Estate",
        description: "Entire villa in Florence, Italy: 16 guests, 8 bedrooms, 10 beds, 8 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 98000,
        location: "Florence, Tuscany, Italy",
        country: "Italy"
    },
    {
        title: "Luxury Architectural Estate",
        description: "Entire villa in Miami, USA: 14 guests, 7 bedrooms, 8 beds, 7.5 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 89000,
        location: "Miami Beach, Florida, United States",
        country: "United States"
    },
    {
        title: "Serene Pool House Stay",
        description: "Entire villa in Mykonos, Greece: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 26000,
        location: "Mykonos, South Aegean, Greece",
        country: "Greece"
    },
    {
        title: "Monza Historic Park Villa",
        description: "Entire villa in Milan, Italy: 8 guests, 4 bedrooms, 4 beds, 4 bathrooms",
        image: { url: "https://cdn.pixabay.com/photo/2019/11/19/17/56/villa-real-4638107_1280.jpg", filename: "listingimage" }, //[cite: 2]
        price: 31000,
        location: "Milan, Lombardy, Italy",
        country: "Italy"
    }
];

let reviews = [
    { rating: 5, comment: "Amazing place, highly recommended!" },
    { rating: 4, comment: "A bit noisy but beautiful views." },
    { rating: 5, comment: "Great host, lovely stay." },
    { rating: 4, comment: "Would definitely come back!" },
    { rating: 3, comment: "Not what we expected but okay." },
    { rating: 5, comment: "Breathtaking scenery and cozy interior." },
    { rating: 5, comment: "Perfect for a weekend getaway." },
    { rating: 4, comment: "Clean, comfortable, and close to everything." },
    { rating: 5, comment: "Absolutely stunning property, we loved it!" },
    { rating: 3, comment: "Good value for money." },
    { rating: 1, comment: "Terrible experience, the place was dirty." },
    { rating: 2, comment: "The AC was broken and the host didn't respond." },
    { rating: 1, comment: "Nothing like the pictures. Very disappointed." },
    { rating: 2, comment: "Location is good but the house needs maintenance." },
    { rating: 1, comment: "Loud construction next door ruined our trip." },
    { rating: 2, comment: "Beds were extremely uncomfortable." },
    { rating: 4, comment: "Nice stay overall, just a bit overpriced." },
    { rating: 1, comment: "Found bugs in the bathroom. Left immediately." },
    { rating: 5, comment: "Exceptional! Exceeded all our expectations." },
    { rating: 2, comment: "Check-in process was a nightmare." }
];

let users = [
    { username: "john_doe", email: "john@example.com" },
    { username: "jane_smith", email: "jane@example.com" },
    { username: "alice_wonder", email: "alice@example.com" },
    { username: "bob_builder", email: "bob@example.com" },
    { username: "charlie_chaplin", email: "charlie@example.com" },
    { username: "diana_prince", email: "diana@example.com" },
    { username: "edward_scissor", email: "edward@example.com" },
    { username: "fiona_gallagher", email: "fiona@example.com" },
    { username: "george_clooney", email: "george@example.com" },
    { username: "hannah_montana", email: "hannah@example.com" },
    { username: "user1", email: "user1@example.com" },
    { username: "user2", email: "user2@example.com" },
    { username: "user3", email: "user3@example.com" },
    { username: "user4", email: "user4@example.com" },
    { username: "test", email: "test@example.com" }
];

module.exports = {
    data : listings,
    reviews: reviews,
    users: users
};