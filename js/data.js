const destinations = [
  {
    id: "dest-1",
    title: "อุทยานแห่งชาติภูหินร่องกล้า",
    location: "พิษณุโลก",
    image:
      "https://files.thailandtourismdirectory.go.th/assets/upload/2018/08/16/20180816d41d8cd98f00b204e9800998ecf8427e134735.jpg",
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
      "https://sundayz.me/wp-content/uploads/2021/07/thung-salaeng-luang-ep2-10-featured.jpg",
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
    image: "https://www.dhammathai.org/watthai/data/imagedb/23-2.jpg",
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
      "https://f.tpkcdn.com/images-source/5876ce3813a9f54bc772de3734ebbb73.jpg",
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
    image: "https://www.meetthinks.com/wp-content/uploads/2021/11/wind1.jpg",
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
    image: "https://noomsaotours.co.th/gallery/images/DSC_3391.jpg",
    description:
      "หมู่บ้านสัมผัสอากาศหนาวเย็นสไตล์นากาโนะเมืองไทย มีดอกนางพญาเสือโคร่งบานสะพรั่งในช่วงต้นปี และวิถีชีวิตชาวม้งที่น่าสนใจ",
    category: "ภูเขา",
    coords: { lat: 17.0236, lng: 101.0221 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.543!2d101.0221!3d17.0236",
  },
  {
    id: "dest-7",
    title: "ดอยอินทนนท์",
    location: "เชียงใหม่",
    image:
      "https://image-tc.galaxy.tf/wijpeg-sxrfid5inslt46adwg0pwpho/intanon_standard.jpg?crop=112%2C0%2C1777%2C1333",
    description:
      "ยอดเขาที่สูงที่สุดในประเทศไทย สัมผัสอากาศหนาวจัดชมพระมหาธาตุนภเมทนีดลและพระมหาธาตุนภพลภูมิสิริ",
    category: "ภูเขา",
    coords: { lat: 18.5915, lng: 98.4872 },
    mapUrl: "https://goo.gl/maps/x7",
  },
  {
    id: "dest-8",
    title: "หมู่เกาะพีพี",
    location: "กระบี่",
    image:
      "https://blog.bangkokair.com/wp-content/uploads/2025/11/02_phiphi-island-krabi-travel-guide.jpg",
    description:
      "สวรรค์ของคนรักทะเล ชมความงามของอ่าวมาหยาและดำน้ำดูปะการังน้ำตื้นที่ใสจนเห็นตัวปลา",
    category: "ทะเล",
    coords: { lat: 7.7407, lng: 98.7784 },
    mapUrl: "https://goo.gl/maps/x8",
  },
  {
    id: "dest-9",
    title: "อุทยานแห่งชาติเขาสก",
    location: "สุราษฎร์ธานี",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/1022_KhaoSokNationalPark_2.jpg/500px-1022_KhaoSokNationalPark_2.jpg",
    description:
      "ล่องเรือชมเขาสามเกลอในเขื่อนเชี่ยวหลาน สัมผัสภูเขาหินปูนกลางน้ำที่ได้รับฉายาว่ากุ้ยหลินเมืองไทย",
    category: "ทะเล",
    coords: { lat: 8.9774, lng: 98.5315 },
    mapUrl: "https://goo.gl/maps/x9",
  },
  {
    id: "dest-10",
    title: "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
    location: "พระนครศรีอยุธยา",
    image:
      "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/oeqhxiz4q1374z6p8n5r/%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99.jpg",
    description:
      "เที่ยวชมมรดกโลก ไหว้พระตามวัดเก่าแก่ และชมความรุ่งเรืองในอดีตของราชธานีไทย",
    category: "วัด",
    coords: { lat: 14.3569, lng: 100.5586 },
    mapUrl: "https://goo.gl/maps/x10",
  },
  {
    id: "dest-11",
    title: "น้ำตกเอราวัณ",
    location: "กาญจนบุรี",
    image: "https://f.ptcdn.info/015/014/000/1388651491-MG22761-o.jpg",
    description:
      "น้ำตกสีเขียวมรกต 7 ชั้นที่มีความสวยงามเป็นเอกลักษณ์ โดยเฉพาะชั้นที่ 7 ที่มีลักษณะคล้ายหัวช้างเอราวัณ",
    category: "น้ำตก",
    coords: { lat: 14.3687, lng: 99.1438 },
    mapUrl: "https://goo.gl/maps/x11",
  },
  {
    id: "dest-12",
    title: "อ่าวไร่เลย์",
    location: "กระบี่",
    image:
      "https://cms.dmpcdn.com/travel/2018/04/19/fc420678-512d-4722-ae06-85a86a6e17e1.jpg",
    description:
      "แหล่งปีนผาระดับโลกที่มีหาดทรายขาวละเอียดและล้อมรอบด้วยหน้าผาหินปูนสูงชัน เข้าถึงได้เฉพาะทางเรือเท่านั้น",
    category: "ทะเล",
    coords: { lat: 8.0119, lng: 98.8367 },
    mapUrl: "https://goo.gl/maps/x12",
  },
  {
    id: "dest-13",
    title: "ปางอุ๋ง",
    location: "แม่ฮ่องสอน",
    image:
      "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2017/01/1-1-1024x683.jpeg",
    description:
      "สวิตเซอร์แลนด์เมืองไทย ชมไอหมอกลอยเหนืออ่างเก็บน้ำขนาดใหญ่ท่ามกลางทิวสนสามใบ",
    category: "จุดกางเต็นท์",
    coords: { lat: 19.4991, lng: 97.9088 },
    mapUrl: "https://goo.gl/maps/x13",
  },
  {
    id: "dest-14",
    title: "เกาะหลีเป๊ะ",
    location: "สตูล",
    image: "https://www.mountainresortlipe.com/img/slide_in/02.jpg",
    description:
      "มัลดีฟส์เมืองไทย ทะเลสีฟ้าใสและหาดทรายนุ่มเหมือนแป้ง พร้อมจุดดำน้ำที่อุดมสมบูรณ์",
    category: "ทะเล",
    coords: { lat: 6.4894, lng: 99.3023 },
    mapUrl: "https://goo.gl/maps/x14",
  },
  {
    id: "dest-15",
    title: "อุทยานประวัติศาสตร์สุโขทัย",
    location: "สุโขทัย",
    image:
      "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT640043/3.jpeg",
    description:
      "ปั่นจักรยานชมโบราณสถานสมัยอาณาจักรสุโขทัย ไหว้พระพุทธรูปองค์ใหญ่ที่วัดศรีชุม",
    category: "วัด",
    coords: { lat: 17.0205, lng: 99.7037 },
    mapUrl: "https://goo.gl/maps/x15",
  },
  {
    id: "dest-16",
    title: "สะพานมอญ (สังขละบุรี)",
    location: "กาญจนบุรี",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/47/eb/a4/sangkhlaburi-wooden-bridge.jpg?w=1200&h=1200&s=1",
    description:
      "สะพานไม้ที่ยาวที่สุดในประเทศไทย สัมผัสวัฒนธรรมไทย-มอญ และตักบาตรยามเช้า",
    category: "จุดกางเต็นท์",
    coords: { lat: 15.1434, lng: 98.4513 },
    mapUrl: "https://goo.gl/maps/x16",
  },
  {
    id: "dest-17",
    title: "วัดภูมินทร์",
    location: "น่าน",
    image:
      "https://www.dasta.or.th/uploads/article/202107/1625238035_c5f99af69f1ce863cb56.jpg",
    description:
      "ชมภาพเขียนกระซิบรักบันลือโลก 'ปู่ม่าน ย่าม่าน' ภายในวัดเก่าแก่ทรงจตุรมุขที่มีเอกลักษณ์",
    category: "วัด",
    coords: { lat: 18.7744, lng: 100.7701 },
    mapUrl: "https://goo.gl/maps/x17",
  },
  {
    id: "dest-18",
    title: "ถนนคนเดินเชียงคาน",
    location: "เลย",
    image:
      "https://itp1.itopfile.com/ImageServer/9ab8e5ef63ad212e/524/0/%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%99z-z1493233923597.webp",
    description:
      "เดินเล่นชมบ้านไม้เก่าแก่ริมแม่น้ำโขง ใส่บาตรข้าวเหนียว และซึมซับบรรยากาศสโลว์ไลฟ์",
    category: "จุดกางเต็นท์",
    coords: { lat: 17.8953, lng: 101.6543 },
    mapUrl: "https://goo.gl/maps/x18",
  },
  {
    id: "dest-19",
    title: "เขาตะปู (James Bond Island)",
    location: "พังงา",
    image: "https://www.kkday.com/th/blog/wp-content/uploads/jpg-27.jpeg",
    description:
      "เขาหินปูนรูปทรงแปลกตาโด่งดังระดับโลกจากภาพยนตร์ 007 ตั้งอยู่ในอ่าวพังงา",
    category: "ทะเล",
    coords: { lat: 8.2745, lng: 98.5019 },
    mapUrl: "https://goo.gl/maps/x19",
  },
  {
    id: "dest-20",
    title: "ภูชี้ฟ้า",
    location: "เชียงราย",
    image:
      "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT570567/2.jpeg",
    description: "ชมทะเลหมอกที่สวยที่สุดแห่งหนึ่งบนยอดเขารอยต่อชายแดนไทย-ลาว",
    category: "ภูเขา",
    coords: { lat: 19.8507, lng: 100.4533 },
    mapUrl: "https://goo.gl/maps/x20",
  },
  {
    id: "dest-21",
    title: "เกาะสมุย",
    location: "สุราษฎร์ธานี",
    image:
      "https://cocopalmbeachresort.com/wp-content/uploads/2022/08/1620728756609a5bb42e481.jpeg",
    description:
      "เกาะยอดฮิตในอ่าวไทยที่มีทั้งแหล่งท่องเที่ยวสุดหรูและธรรมชาติที่งดงาม",
    category: "ทะเล",
    coords: { lat: 9.512, lng: 100.0136 },
    mapUrl: "https://goo.gl/maps/x21",
  },
  {
    id: "dest-22",
    title: "น้ำตกห้วยแม่ขมิ้น",
    location: "กาญจนบุรี",
    image:
      "https://cms.dmpcdn.com/travel/2020/04/03/8446efc0-75a0-11ea-b4e9-0984d8e8648f_original.jpg",
    description:
      "น้ำตกหินปูนสวยงามกลางป่าลึก แบ่งเป็นชั้นๆ น้ำมีสีมรกตและใสสะอาด",
    category: "น้ำตก",
    coords: { lat: 14.6385, lng: 98.9958 },
    mapUrl: "https://goo.gl/maps/x22",
  },
  {
    id: "dest-23",
    title: "วัดร่องขุ่น",
    location: "เชียงราย",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Wat_Rong_Khun1.jpg",
    description:
      "วัดสีขาวนวลตาออกแบบโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ มีสถาปัตยกรรมที่วิจิตรงดงาม",
    category: "วัด",
    coords: { lat: 19.8242, lng: 99.7633 },
    mapUrl: "https://goo.gl/maps/x23",
  },
  {
    id: "dest-24",
    title: "พระปฐมเจดีย์",
    location: "นครปฐม",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/52/1b/79/caption.jpg?w=800&h=400&s=1",
    description:
      "พระเจดีย์ที่ใหญ่ที่สุดในประเทศไทย แลนด์มาร์คสำคัญใกล้กรุงเทพฯ",
    category: "วัด",
    coords: { lat: 13.8196, lng: 100.0601 },
    mapUrl: "https://goo.gl/maps/x24",
  },
  {
    id: "dest-25",
    title: "ดอยอ่างขาง",
    location: "เชียงใหม่",
    image:
      "https://s359.kapook.com/pagebuilder/a6ee41e0-8e81-4eb8-a339-2efb786d3d1b.jpg",
    description:
      "เที่ยวชมสถานีเกษตรหลวงอ่างขาง ดูแปลงดอกไม้เมืองหนาวและสัมผัสอากาศหนาวเย็น",
    category: "ภูเขา",
    coords: { lat: 19.9015, lng: 99.0401 },
    mapUrl: "https://goo.gl/maps/x25",
  },
  {
    id: "dest-26",
    title: "เกาะกูด",
    location: "ตราด",
    image:
      "https://s359.kapook.com/pagebuilder/51c8e730-a2fa-4d10-8eee-b3139e40bb1c.jpg",
    description:
      "เกาะสุดท้ายในน่านน้ำตะวันออก ทะเลใสและสงบเงียบ เหมาะแก่การพักผ่อนอย่างแท้จริง",
    category: "ทะเล",
    coords: { lat: 11.6568, lng: 102.5484 },
    mapUrl: "https://goo.gl/maps/x26",
  },
  {
    id: "dest-27",
    title: "Meena Rice Based Cuisine",
    location: "เชียงใหม่",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/81/51/b7/meena-rice-based-cuisine.jpg",
    description:
      "คาเฟ่และร้านอาหารกลางทุ่งนาที่นำข้าวหลากสีมาสร้างสรรค์เมนูสุดพิเศษ ท่ามกลางบรรยากาศเรือนไม้เก่าและแมกไม้ที่ร่มรื่น",
    category: "คาเฟ่",
    coords: { lat: 18.7915, lng: 99.0435 },
    mapUrl: "https://goo.gl/maps/x27",
  },
  {
    id: "dest-28",
    title: "After Rain Coffee & Gallery",
    location: "นครปฐม",
    image:
      "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/482225455_1147424717180065_5368090970264475520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_ohc=lyHxT3PdfMcQ7kNvwHB-8XK&_nc_oc=AdlYiT3Pp2WKsgn-mjqNWPj_u_z-tCuSMRBqdIMm-9dZFJtHVNY4tZ7Zvot_4bcwPrU&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=qJJQZNypj8xHiV8GPfoBuw&_nc_ss=8&oh=00_Afv_2x4jVlnBX69IGPev1SwgWPZlj8pIn3jAqmWV9s8Jsw&oe=69A9F702",
    description:
      "สัมผัสบรรยากาศคาเฟ่ในสวนร่องสวน พายเรือชมธรรมชาติ และจิบกาแฟในพื้นที่สีเขียวที่ช่วยให้ผ่อนคลายจากความวุ่นวาย",
    category: "คาเฟ่",
    coords: { lat: 13.7745, lng: 100.2234 },
    mapUrl: "https://goo.gl/maps/x28",
  },
  {
    id: "dest-29",
    title: "Red Temp Coffee",
    location: "ชลบุรี",
    image:
      "https://img.wongnai.com/p/1920x0/2019/12/09/9a0bc1025e22414e9ce55ce4b0356312.jpg",
    description:
      "แลนด์มาร์คประภาคารสีแดงริมทะเลบางแสน ชมวิวพระอาทิตย์ตกดินแบบ 360 องศา พร้อมจิบกาแฟเกรดพรีเมียมในบรรยากาศยุโรป",
    category: "คาเฟ่",
    coords: { lat: 13.3105, lng: 100.9012 },
    mapUrl: "https://goo.gl/maps/x29",
  },
  {
    id: "dest-30",
    title: "The Giant Chiang Mai",
    location: "เชียงใหม่",
    image:
      "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kat/news/giant%20chiangmai/12799264_847068418737555_1282377694530832901_n.jpg",
    description:
      "คาเฟ่บนต้นไม้ขนาดยักษ์กลางป่าลึก สัมผัสประสบการณ์สุดตื่นเต้นบนสะพานแขวน และจิบกาแฟรับลมหนาวท่ามกลางยอดไม้สูง",
    category: "คาเฟ่",
    coords: { lat: 18.8654, lng: 99.3123 },
    mapUrl: "https://goo.gl/maps/x30",
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
    travelerId: "u1",
    destinationId: "dest-1",
    image:
      "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "อากาศหนาวมาก ลานหินปุ่มสวยงามสมคำร่ำลือ แนะนำให้มาเช้าๆ ครับ",
    date: "2026-02-22",
  },
  {
    id: "post-2",
    travelerId: "u2",
    destinationId: "dest-2",
    image:
      "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "ได้เห็นแสงแรกที่หนองแม่นา ประทับใจที่สุดในรอบปีเลย",
    date: "2026-02-21",
  },
  {
    id: "post-3",
    travelerId: "u3",
    destinationId: "dest-1",
    image:
      "https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "จุดกางเต็นท์ร่องกล้ากว้างขวาง เจ้าหน้าที่ดูแลดีมาก อุปกรณ์พร้อมลุย!",
    date: "2026-02-20",
  },
  {
    id: "post-4",
    travelerId: "u4",
    destinationId: "dest-3",
    image:
      "https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "พระพุทธชินราชงดงามจริงๆ มาพิษณุโลกต้องห้ามพลาดแวะกราบขอพร",
    date: "2026-02-19",
  },
  {
    id: "post-5",
    travelerId: "u5",
    destinationId: "dest-4",
    image:
      "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "น้ำตกอลังการมาก เสียงน้ำตกช่วยบำบัดความเหนื่อยล้าได้ดีจริงๆ",
    date: "2026-02-18",
  },
  {
    id: "post-6",
    travelerId: "u6",
    destinationId: "dest-5",
    image:
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "กังหันลมใหญ่ยักษ์มาก ถ่ายรูปสวยทุกมุม อากาศข้างบนสดชื่นสุดๆ",
    date: "2026-02-17",
  },
  {
    id: "post-7",
    travelerId: "u1",
    destinationId: "dest-6",
    image:
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "วิถีชีวิตชาวม้งเรียบง่ายและน่ารักมาก กาแฟสดที่นี่รสชาติดีเยี่ยม",
    date: "2026-02-16",
  },
  {
    id: "post-8",
    travelerId: "u2",
    destinationId: "dest-3",
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "วัดสงบมาก มานั่งสมาธิตอนเช้าๆ ช่วยให้จิตใจผ่องใส",
    date: "2026-02-15",
  },
  {
    id: "post-9",
    travelerId: "u3",
    destinationId: "dest-7",
    image:
      "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "เดินกิ่วแม่ปานเช้าๆ อากาศติดลบ แต่คุ้มค่ามากกับวิวทะเลหมอกที่สวยที่สุด",
    date: "2026-02-14",
  },
  {
    id: "post-10",
    travelerId: "u4",
    destinationId: "dest-8",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "น้ำใสสีครามที่อ่าวมาหยาเหมือนสวรรค์บนดิน ดำน้ำดูปะการังฟินมากจริงๆ",
    date: "2026-02-13",
  },
  {
    id: "post-11",
    travelerId: "u5",
    destinationId: "dest-11",
    image:
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "เดินขึ้นถึงชั้น 7 เหนื่อยหน่อยแต่สวยมาก น้ำสีฟ้ามรกตใสแจ๋วน่าเล่นสุดๆ",
    date: "2026-02-12",
  },
  {
    id: "post-12",
    travelerId: "u6",
    destinationId: "dest-13",
    image:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "ตื่นเช้ามาเจอไอหมอกลอยเหนือน้ำ บรรยากาศโรแมนติกเหมือนอยู่สวิตเซอร์แลนด์เลย",
    date: "2026-02-11",
  },
  {
    id: "post-13",
    travelerId: "u1",
    destinationId: "dest-16",
    image:
      "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "สะพานไม้คลาสสิกมาก เดินเล่นรับลมเย็นๆ ชมวิถีชีวิตชาวมอญที่สังขละบุรี",
    date: "2026-02-10",
  },
  {
    id: "post-14",
    travelerId: "u2",
    destinationId: "dest-27",
    image:
      "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "ข้าว 5 สีสวยและอร่อยมาก บรรยากาศร้านร่มรื่นอยู่กลางทุ่งนา เชียงใหม่ห้ามพลาด",
    date: "2026-02-09",
  },
  {
    id: "post-15",
    travelerId: "u3",
    destinationId: "dest-20",
    image:
      "https://images.pexels.com/photos/1034828/pexels-photo-1034828.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "ยืนบนยอดภูดูพระอาทิตย์ขึ้น ท่ามกลางทะเลหมอกกว้างสุดสายตา ประทับใจมากครับ",
    date: "2026-02-08",
  },
  {
    id: "post-16",
    travelerId: "u4",
    destinationId: "dest-23",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "สถาปัตยกรรมสีขาววิจิตรตระการตา ผลงานชิ้นเอกของอาจารย์เฉลิมชัย สวยจนลืมหายใจ",
    date: "2026-02-07",
  },
  {
    id: "post-17",
    travelerId: "u5",
    destinationId: "dest-29",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "จิบกาแฟดูวิวประภาคารริมทะเลบางแสน ลมพัดเย็นสบาย ถ่ายรูปออกมาเท่มาก",
    date: "2026-02-06",
  },
  {
    id: "post-18",
    travelerId: "u6",
    destinationId: "dest-30",
    image:
      "https://images.pexels.com/photos/445174/pexels-photo-445174.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "คาเฟ่บนต้นไม้ใหญ่ บรรยากาศแปลกใหม่ตื่นเต้นสุดๆ ได้รูปสวยๆ กลับบ้านเพียบเลย",
    date: "2026-02-05",
  },
];
