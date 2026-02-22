// 1. ข้อมูลสถานที่ท่องเที่ยว (Destinations Entity)
// เก็บเฉพาะข้อมูลที่เป็น "ข้อเท็จจริง" ของสถานที่นั้นๆ ไม่เกี่ยวกับผู้โพสต์
const destinations = [
  {
    id: "dest-1",
    title: "อุทยานแห่งชาติภูหินร่องกล้า",
    location: "พิษณุโลก",
    image:
      "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800",
    description:
      "สัมผัสอากาศหนาวเย็นตลอดปี ชมความงามของลานหินปุ่ม และศึกษาประวัติศาสตร์โรงเรียนการเมืองการทหาร เป็นจุดกางเต็นท์ยอดฮิตที่อยู่ห่างจาก ม.นเรศวร เพียง 130 กม.",
    category: "จุดกางเต็นท์",
    coords: { lat: 16.9936, lng: 101.0021 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.832!2d101.0021!3d16.9936",
  },
  {
    id: "dest-2",
    title: "ทุ่งแสลงหลวง (หนองแม่นา)",
    location: "เพชรบูรณ์",
    image:
      "https://images.unsplash.com/photo-1504280390467-33923a1a5113?q=80&w=800",
    description:
      "ฉายา 'ทุ่งหญ้าสะวันนาแห่งเมืองไทย' เหมาะกับการมาปั่นจักรยานชมวิวและกางเต็นท์ในช่วงปลายฝนต้นหนาว เพื่อรอชมแสงเช้าส่องผ่านไอหมอก",
    category: "จุดกางเต็นท์",
    coords: { lat: 16.5815, lng: 100.8831 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123!2d100.8831!3d16.5815",
  },
  {
    id: "dest-3",
    title: "วัดพระศรีรัตนมหาธาตุวรมหาวิหาร",
    location: "พิษณุโลก",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
    description:
      "กราบไหว้พระพุทธชินราช พระพุทธรูปที่ได้รับการยอมรับว่างดงามที่สุดในประเทศไทย ตั้งอยู่ริมแม่น้ำน่านใจกลางเมืองพิษณุโลก",
    category: "วัด",
    coords: { lat: 16.8236, lng: 100.2621 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.546!2d100.2621!3d16.8236",
  },
  {
    id: "dest-4",
    title: "น้ำตกแก่งโสภา",
    location: "พิษณุโลก",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
    description:
      "ไนแองการ่าเมืองไทย น้ำตกขนาดใหญ่ 3 ชั้นที่มีความสง่างาม ตั้งอยู่ในเขตอุทยานแห่งชาติทุ่งแสลงหลวง ทางฝั่งพิษณุโลก",
    category: "น้ำตก",
    coords: { lat: 16.8705, lng: 100.8425 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.987!2d100.8425!3d16.8705",
  },
  {
    id: "dest-5",
    title: "ทุ่งกังหันลม เขาค้อ",
    location: "เพชรบูรณ์",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    description:
      "แลนด์มาร์คสำคัญบนเขาค้อ สัมผัสอากาศบริสุทธิ์และถ่ายรูปกับกังหันลมยักษ์บนยอดเขาสูง พร้อมชมทัศนียภาพแบบ 360 องศา",
    category: "ภูเขา",
    coords: { lat: 16.6805, lng: 100.9925 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.241!2d100.9925!3d16.6805",
  },
  {
    id: "dest-6",
    title: "หมู่บ้านร่องกล้า",
    location: "พิษณุโลก",
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=800",
    description:
      "หมู่บ้านสัมผัสอากาศหนาวเย็นสไตล์นากาโนะเมืองไทย มีดอกนางพญาเสือโคร่งบานสะพรั่งในช่วงต้นปี และวิถีชีวิตชาวม้งที่น่าสนใจ",
    category: "ภูเขา",
    coords: { lat: 17.0236, lng: 101.0221 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.543!2d101.0221!3d17.0236",
  },
];

// 2. ข้อมูลนักเดินทาง (Travelers Entity)
// เก็บข้อมูลโปรไฟล์ของผู้ใช้งาน (ไม่รวมสมาชิกทีมที่อยู่ในหน้า About)
const travelers = [
  {
    id: "u1",
    name: "บอยท่าเรือ",
    bio: "นักสะสมภาพถ่ายธรรมชาติ",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "u2",
    name: "มอนิ่ง อลิซ",
    bio: "ชอบเดินป่าในตอนเช้า",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: "u3",
    name: "เสือผาด ทัวริ่ง",
    bio: "สายแคมป์ปิ้ง อุปกรณ์ครบ",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: "u4",
    name: "แก้วตา บุกเบิก",
    bio: "ชอบหาพิกัดลับๆ ทั่วไทย",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: "u5",
    name: "สมษักศ์ ทางไกล",
    bio: "เดินทางด้วยมอเตอร์ไซค์",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: "u6",
    name: "เจนนี่ ขี่หมี",
    bio: "นักรีวิวคาเฟ่และภูเขา",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
];

// 3. ข้อมูลโพสต์รีวิว (Traveler Posts Entity)
// เป็นส่วนเชื่อมโยง (Link) ระหว่าง Travelers และ Destinations (Relation)
const travelerPosts = [
  {
    id: "post-1",
    travelerId: "u1", // บอยท่าเรือ
    destinationId: "dest-1", // ภูหินร่องกล้า
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80",
    content: "อากาศหนาวมาก ลานหินปุ่มสวยงามสมคำร่ำลือ แนะนำให้มาเช้าๆ ครับ",
    date: "2026-02-22",
  },
  {
    id: "post-2",
    travelerId: "u2", // มอนิ่ง อลิซ
    destinationId: "dest-2", // ทุ่งแสลงหลวง
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80",
    content: "ได้เห็นแสงแรกที่หนองแม่นา ประทับใจที่สุดในรอบปีเลย",
    date: "2026-02-21",
  },
  {
    id: "post-3",
    travelerId: "u3", // เสือผาด ทัวริ่ง
    destinationId: "dest-1",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80",
    content:
      "จุดกางเต็นท์ร่องกล้ากว้างขวาง เจ้าหน้าที่ดูแลดีมาก อุปกรณ์พร้อมลุย!",
    date: "2026-02-20",
  },
  {
    id: "post-4",
    travelerId: "u4", // แก้วตา บุกเบิก
    destinationId: "dest-3", // วัดพระศรี
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80",
    content: "พระพุทธชินราชงดงามจริงๆ มาพิษณุโลกต้องห้ามพลาดแวะกราบขอพร",
    date: "2026-02-19",
  },
  {
    id: "post-5",
    travelerId: "u5", // สมษักศ์ ทางไกล
    destinationId: "dest-4", // น้ำตกแก่งโสภา
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80",
    content: "น้ำตกอลังการมาก เสียงน้ำตกช่วยบำบัดความเหนื่อยล้าได้ดีจริงๆ",
    date: "2026-02-18",
  },
  {
    id: "post-6",
    travelerId: "u6", // เจนนี่ ขี่หมี
    destinationId: "dest-5", // ทุ่งกังหันลม
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80",
    content: "กังหันลมใหญ่ยักษ์มาก ถ่ายรูปสวยทุกมุม อากาศข้างบนสดชื่นสุดๆ",
    date: "2026-02-17",
  },
  {
    id: "post-7",
    travelerId: "u1", // บอยท่าเรือ
    destinationId: "dest-6", // หมู่บ้านร่องกล้า
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80",
    content: "วิถีชีวิตชาวม้งเรียบง่ายและน่ารักมาก กาแฟสดที่นี่รสชาติดีเยี่ยม",
    date: "2026-02-16",
  },
  {
    id: "post-8",
    travelerId: "u2", // มอนิ่ง อลิซ
    destinationId: "dest-3",
    image: "https://images.unsplash.com/photo-1598977123418-45d029bc48e5?q=80",
    content: "วัดสงบมาก มานั่งสมาธิตอนเช้าๆ ช่วยให้จิตใจผ่องใส",
    date: "2026-02-15",
  },
];
