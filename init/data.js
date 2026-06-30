let listings = [
    {
        title: "Luxury Duplex 3B Villa - Pvt Pool - Anjuna Vagator",
        description: "Entire villa in Anjuna, India: 6 guests, 3 bedrooms, 3 beds, 4 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1678969521462474120/original/75f1c867-e3ad-45e7-8c4b-6a294a562fcb.png",
        price: 27620,
        location: "Anjuna, Goa, India",
        country: "India"
    },
    {
        title: "Bebinca 2BHK | Luxury | Private Bar Lounge | Pool",
        description: "Entire rental unit in Candolim, India: 5 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1578972252508139494/original/9ebd5d41-d432-42af-9e28-ef34cfd880bd.jpeg",
        price: 9928,
        location: "Candolim, Goa, India",
        country: "India"
    },
    {
        title: "Stayscape- Sage House, 5BHK Lonavala wd Game Zone",
        description: "Entire villa in Lonavala, India: 16+ guests, 5 bedrooms, 6 beds, 5 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1667999959848666128/original/62b4763f-1c1f-4830-88cc-389242b4c04b.jpeg",
        price: 59300,
        location: "Lonavala, Pune, Maharashtra, India",
        country: "India"
    },
    {
        title: "Valley VIEW/2BHKSecluded/1KM from Mall RD| Parking",
        description: "Entire apartment in Mussorie, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1672918911659072345/original/e1901ebb-e141-4dd5-bb57-63ff98f1aee4.png",
        price: 11538,
        location: "Mussorie, Dehradun, Uttrakhand, India",
        country: "India"
    },
    {
        title: "Ramaya Stay - A luxurious stay at home",
        description: "Entire apartment in Rishikesh, India: 8 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1668942133817906250/original/4fe9e985-1145-4f0f-a39b-29c62304194e.jpeg",
        price: 14220,
        location: "Rishikesh, Uttrakhand, India",
        country: "India"
    },
    {
        title: "Vihaar by lagom stay duplex 2 bedroom cottage",
        description: "Entire home in Manali, India: 4 guests, 2 bedrooms, 2 beds, 3 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1091893894193155833/original/6c92d9d1-3a5e-4b0c-a90e-326351b8c6d7.jpeg",
        price: 7395,
        location: "Manali, India",
        country: "India"
    },
    {
        title: "Krishna Homes 10 min from kashi Vishwanath",
        description: "Entire apartment in Varanasi, India: 7 guests, 3 bedrooms, 3 beds, 2 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1585539772982579274/original/a66a6faa-1899-4873-b0ad-533a87f7279c.jpeg",
        price: 10416,
        location: "Varanasi, India",
        country: "India"
    },
    {
        title: "Artovyn by Onnyx Suites • Luxury 3BHK w/ Tub",
        description: "Entire rental unit in New Delhi, India: 8 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1647962768409503748/original/3b649a6d-34e1-4441-88e4-26172a359e58.png",
        price: 26196,
        location: "New Delhi, India",
        country: "India"
    },
    {
        title: "Arbour Suites",
        description: "Entire rental unit in Lucknow, India: 8 guests, 3 bedrooms, 3 beds, 2 bathrooms",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1480311514871356979/original/55d8d5b6-0a0e-465d-8f80-910545fb8f8b.jpeg",
        price: 11926,
        location: "Lucknow, India",
        country: "India"
    },
    {
        title: "Azure Heights 4BHK Penthouse w/ Private Deck",
        description: "Entire condominium in Mumbai, India: 8 guests, 4 bedrooms, 4 beds, 4.5 bathrooms",
        image: "https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg",
        price: 34500,
        location: "Bandra West, Mumbai, India",
        country: "India"
    },
    {
        title: "The Mudhouse Eco-Resort & Spa",
        description: "Entire bungalow in Wayanad, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/7587828/pexels-photo-7587828.jpeg",
        price: 8400,
        location: "Wayanad, Kerala, India",
        country: "India"
    },
    {
        title: "Heritage Haveli Suite near City Palace",
        description: "Private room in Udaipur, India: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg",
        price: 6200,
        location: "Udaipur, Rajasthan, India",
        country: "India"
    },
    {
        title: "Pinecrest Glass Villa - Mountain Views",
        description: "Entire villa in Shimla, India: 6 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: "https://images.pexels.com/photos/9494898/pexels-photo-9494898.jpeg",
        price: 18900,
        location: "Mashobra, Shimla, Himachal Pradesh, India",
        country: "India"
    },
    {
        title: "Palmeira Serene Studio - 5 mins to Beach",
        description: "Entire guest suite in Puducherry, India: 3 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg",
        price: 4500,
        location: "White Town, Puducherry, India",
        country: "India"
    },
    {
        title: "Solitude Woods 3BHK Chalet",
        description: "Entire chalet in Ooty, India: 7 guests, 3 bedrooms, 4 beds, 3 bathrooms",
        image: "https://images.pexels.com/photos/7511695/pexels-photo-7511695.jpeg",
        price: 13800,
        location: "Ooty, Tamil Nadu, India",
        country: "India"
    },
    {
        title: "The Bohemian Loft @ Koramangala",
        description: "Entire loft in Bengaluru, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/7195739/pexels-photo-7195739.jpeg",
        price: 7100,
        location: "Bengaluru, Karnataka, India",
        country: "India"
    },
    {
        title: "Tea Garden Estate Villa w/ Chef",
        description: "Entire villa in Darjeeling, India: 10 guests, 4 bedrooms, 5 beds, 4 bathrooms",
        image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg",
        price: 22400,
        location: "Darjeeling, West Bengal, India",
        country: "India"
    },
    {
        title: "Casa De Sol - 4BHK Portuguese Mansion",
        description: "Entire villa in Assagao, India: 8 guests, 4 bedrooms, 4 beds, 4.5 bathrooms",
        image: "https://images.pexels.com/photos/33537442/pexels-photo-33537442.jpeg",
        price: 41000,
        location: "Assagao, Goa, India",
        country: "India"
    },
    {
        title: "The Sanctuary - Secluded Jungle Cabin",
        description: "Entire cabin in Coorg, India: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/7511693/pexels-photo-7511693.jpeg",
        price: 9500,
        location: "Madikeri, Coorg, Karnataka, India",
        country: "India"
    },
    {
        title: "Whispering Pines 2BHK Wooden Cottage",
        description: "Entire cottage in Kasauli, India: 5 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/15062127/pexels-photo-15062127.jpeg",
        price: 12500,
        location: "Kasauli, Himachal Pradesh, India",
        country: "India"
    },
    {
        title: "The Royal Mirage Pool Villa",
        description: "Entire villa in Jaipur, India: 12 guests, 5 bedrooms, 6 beds, 5 bathrooms",
        image: "https://images.pexels.com/photos/11565826/pexels-photo-11565826.jpeg",
        price: 48000,
        location: "Amer, Jaipur, Rajasthan, India",
        country: "India"
    },
    {
        title: "Nirvana Cliffside Duplex - Ocean View",
        description: "Entire villa in Varkala, India: 4 guests, 2 bedrooms, 2 beds, 3 bathrooms",
        image: "https://images.pexels.com/photos/36353282/pexels-photo-36353282.png",
        price: 16200,
        location: "Varkala, Kerala, India",
        country: "India"
    },
    {
        title: "Aura Luxury Apartment - Cyber Hub",
        description: "Entire serviced apartment in Gurugram, India: 3 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/36363110/pexels-photo-36363110.jpeg",
        price: 5800,
        location: "DLF Phase 2, Gurugram, Haryana, India",
        country: "India"
    },
    {
        title: "Serenity Lakehouse 3BHK w/ Private Boat",
        description: "Entire villa in Alleppey, India: 6 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: "https://images.pexels.com/photos/11296142/pexels-photo-11296142.jpeg",
        price: 24500,
        location: "Alappuzha (Alleppey), Kerala, India",
        country: "India"
    },
    {
        title: "Urban Zen Studio near Heritage District",
        description: "Entire rental unit in Kolkata, India: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/8146214/pexels-photo-8146214.jpeg",
        price: 3900,
        location: "Park Street, Kolkata, West Bengal, India",
        country: "India"
    },
    {
        title: "Elysium 4BHK Mountain Chalet",
        description: "Entire chalet in Nainital, India: 9 guests, 4 bedrooms, 5 beds, 4 bathrooms",
        image: "https://images.pexels.com/photos/8089155/pexels-photo-8089155.jpeg",
        price: 21000,
        location: "Bhimtal, Nainital, Uttarakhand, India",
        country: "India"
    },
    {
        title: "Sunkissed Penthouse w/ Rooftop Jacuzzi",
        description: "Entire condominium in Pune, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/15409515/pexels-photo-15409515.jpeg",
        price: 11200,
        location: "Koregaon Park, Pune, Maharashtra, India",
        country: "India"
    },
    {
        title: "The Terracotta Heritage Stay",
        description: "Entire bungalow in Shantiniketan, India: 6 guests, 3 bedrooms, 3 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg",
        price: 7800,
        location: "Bolpur, Shantiniketan, West Bengal, India",
        country: "India"
    },
    {
        title: "Bel-Air 5BHK Luxury Villa w/ Lawn",
        description: "Entire villa in Alibaug, India: 14 guests, 5 bedrooms, 6 beds, 5.5 bathrooms",
        image: "https://images.pexels.com/photos/7546648/pexels-photo-7546648.jpeg",
        price: 52000,
        location: "Mandwa, Alibaug, Maharashtra, India",
        country: "India"
    },
    {
        title: "The Glass House - Lakefront Villa",
        description: "Entire villa in Lonavala, India: 8 guests, 3 bedrooms, 3 beds, 3 bathrooms",
        image: "https://images.pexels.com/photos/6297086/pexels-photo-6297086.jpeg",
        price: 28500,
        location: "Pawna Lake, Lonavala, Maharashtra, India",
        country: "India"
    },
    {
        title: "Kailash View Heritage Boutique Stay",
        description: "Private room in Kasol, India: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg",
        price: 4200,
        location: "Kasol, Himachal Pradesh, India",
        country: "India"
    },
    {
        title: "La Vida - 3BHK Private Pool Villa",
        description: "Entire villa in Vagator, India: 6 guests, 3 bedrooms, 3 beds, 3.5 bathrooms",
        image: "https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg",
        price: 31000,
        location: "Vagator, Goa, India",
        country: "India"
    },
    {
        title: "The Colonial Bungalow Suite",
        description: "Entire guest suite in Fort Kochi, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/11295880/pexels-photo-11295880.jpeg",
        price: 8900,
        location: "Fort Kochi, Kerala, India",
        country: "India"
    },
    {
        title: "Shivalik Valley 4BHK Wooden Chalet",
        description: "Entire chalet in Mussoorie, India: 8 guests, 4 bedrooms, 4 beds, 4 bathrooms",
        image: "https://images.pexels.com/photos/6265836/pexels-photo-6265836.jpeg",
        price: 24000,
        location: "Landour, Mussoorie, Uttarakhand, India",
        country: "India"
    },
    {
        title: "Bougainvillea Studio - Sea View Deck",
        description: "Entire rental unit in Varkala, India: 2 guests, 1 bedroom, 1 bed, 1 bathroom",
        image: "https://images.pexels.com/photos/6636321/pexels-photo-6636321.jpeg",
        price: 5500,
        location: "North Cliff, Varkala, Kerala, India",
        country: "India"
    },
    {
        title: "The Artist's Retreat - 2BHK Cottage",
        description: "Entire cottage in Auroville, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/8146332/pexels-photo-8146332.jpeg",
        price: 6800,
        location: "Auroville, Tamil Nadu, India",
        country: "India"
    },
    {
        title: "Meghalaya Cloud-Rest Cabin",
        description: "Entire cabin in Shillong, India: 3 guests, 1 bedroom, 2 beds, 1 bathroom",
        image: "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg",
        price: 7500,
        location: "Shillong, Meghalaya, India",
        country: "India"
    },
    {
        title: "Palatial 5BHK Farmhouse w/ Infinity Pool",
        description: "Entire villa in Chattarpur, India: 15 guests, 5 bedrooms, 6 beds, 6 bathrooms",
        image: "https://images.pexels.com/photos/32062853/pexels-photo-32062853.jpeg",
        price: 45000,
        location: "Chattarpur, New Delhi, India",
        country: "India"
    },
    {
        title: "Backwater Serenity 2BHK Traditional Villa",
        description: "Entire villa in Kumarakom, India: 4 guests, 2 bedrooms, 2 beds, 2 bathrooms",
        image: "https://images.pexels.com/photos/20277194/pexels-photo-20277194.jpeg",
        price: 14500,
        location: "Kumarakom, Kerala, India",
        country: "India"
    }
];

module.exports = { data : listings };