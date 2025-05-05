const sampleListings = [
        {
          "title": "Cozy Beachfront Cottage",
          "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
          "image": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "price": 1500,
          "location": "Malibu",
          "country": "United States"
        },
        {
          "title": "Modern Loft in Downtown",
          "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
          "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "price": 1200,
          "location": "New York City",
          "country": "United States"
        },
        {
          "title": "Mountain Retreat",
          "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
          "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          "price": 1000,
          "location": "Aspen",
          "country": "United States"
        },
        {
          "title": "Historic Villa in Tuscany",
          "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
          "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          "price": 2500,
          "location": "Florence",
          "country": "Italy"
        },
        {
          "title": "Secluded Treehouse Getaway",
          "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
          "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "price": 800,
          "location": "Portland",
          "country": "United States"
        },
        {
          "title": "Beachfront Paradise",
          "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
          "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          "price": 2000,
          "location": "Cancun",
          "country": "Mexico"
        },
        {
          "title": "Rustic Cabin by the Lake",
          "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
          "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          "price": 900,
          "location": "Lake Tahoe",
          "country": "United States"
        },
        {
          "title": "Luxury Penthouse with City Views",
          "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
          "image": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          "price": 3500,
          "location": "Los Angeles",
          "country": "United States"
        },
        {
          "title": "Ski-In/Ski-Out Chalet",
          "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
          "image": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          "price": 3000,
          "location": "Verbier",
          "country": "Switzerland"
        },
        {
          "title": "Safari Lodge in the Serengeti",
          "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
          "image": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          "price": 4000,
          "location": "Serengeti National Park",
          "country": "Tanzania"
        },
            {
              "title": "Japanese Ryokan Experience",
              "description": "Immerse yourself in Japanese culture with a stay at this traditional ryokan, complete with tatami mats and hot springs.",
              "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 1800,
              "location": "Kyoto",
              "country": "Japan"
            },
            {
              "title": "Desert Oasis Resort",
              "description": "Relax in luxury in the heart of the desert. This oasis resort offers pools, spas, and stunning sand dune views.",
              "image": "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
              "price": 2200,
              "location": "Dubai",
              "country": "United Arab Emirates"
            },
            {
              "title": "Canal-Side Apartment",
              "description": "Enjoy picturesque views of the canals in this charming apartment. Perfect for romantic getaways.",
              "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 1600,
              "location": "Amsterdam",
              "country": "Netherlands"
            },
            {
              "title": "Historic Castle Stay",
              "description": "Live like royalty in this beautifully preserved medieval castle with modern amenities.",
              "image": "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
              "price": 5000,
              "location": "Edinburgh",
              "country": "Scotland"
            },
            {
              "title": "Icelandic Cabin with Northern Lights",
              "description": "Stay warm and cozy while watching the Northern Lights dance across the sky.",
              "image": "https://images.unsplash.com/photo-1613553489935-18524bffb206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 2300,
              "location": "Reykjavik",
              "country": "Iceland"
            },
            {
              "title": "Private Island Retreat",
              "description": "Enjoy ultimate privacy and luxury on your own private island, complete with staff and chef.",
              "image": "https://images.unsplash.com/photo-1600114597551-3744b46c4b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 10000,
              "location": "Fiji",
              "country": "Fiji"
            },
            {
              "title": "Countryside Farm Stay",
              "description": "Connect with nature and enjoy farm-fresh meals in this charming countryside home.",
              "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 1100,
              "location": "Bavaria",
              "country": "Germany"
            },
            {
              "title": "Mediterranean Cliffside Villa",
              "description": "Spectacular views and sunsets await you in this cliffside villa overlooking the sea.",
              "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 2700,
              "location": "Santorini",
              "country": "Greece"
            },
            {
              "title": "Rainforest Eco-Lodge",
              "description": "Sustainable and serene, this eco-lodge lets you live in harmony with the jungle around you.",
              "image": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 1900,
              "location": "Costa Rica",
              "country": "Costa Rica"
            },
            {
              "title": "Urban Studio with Rooftop Access",
              "description": "This cozy studio apartment is perfect for solo travelers or couples who want to enjoy skyline views from the rooftop.",
              "image": "https://images.unsplash.com/photo-1515266563453-1b2f2c71df89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              "price": 1300,
              "location": "Toronto",
              "country": "Canada"
            }
];

module.exports = { data: sampleListings };