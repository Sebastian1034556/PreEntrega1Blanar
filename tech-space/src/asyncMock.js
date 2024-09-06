const itemList = [
    { id: 'MLA1826426120', name: 'Redmi Buds 4 Active', detail: 'Auriculares Inalámbricos Xiaomi Redmi Buds 4 Active Color Negro M2232e1', price: 29599, image: 'http://http2.mlstatic.com/D_697218-MLU73566747255_122023-I.jpg', category: 'accessories' },

    { id: 'MLA1428479277', name: 'Redmi 13c', detail: 'Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram', price: 349999, image: 'http://http2.mlstatic.com/D_780144-MLA72668121499_112023-I.jpg', category: 'smartphones' },

    { id: 'MLA1764122120', name: 'Redmi Watch 3 Active', detail: "Smartwatch Xiaomi Redmi Watch 3 Active 1.83' 100 Modos Black Caja Negro Bisel Negro", price: 70999, image: 'http://http2.mlstatic.com/D_789681-MLU72542124768_112023-I.jpg', category: 'accessories' },

    { id: 'MLA1434558657', name: 'Moto G24 Power', detail: 'Moto G24 Power 128gb + 8gb Glacier Blue', price: 429999, image: 'http://http2.mlstatic.com/D_730375-MLU77222096423_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1438287003', name: 'Galaxy A55', detail: 'Samsung Galaxy A55 256gb Awesome Navy 8gb Ram', price: 999999, image: 'http://http2.mlstatic.com/D_976895-MLU77500283258_072024-I.jpg', category: 'smartphones' },

    { id: 'MLA1835323364', name: 'Galaxy A15', detail: 'Samsung Galaxy A15 128 Gb Negro Azulado 4 Gb Ram', price: 338999, image: 'http://http2.mlstatic.com/D_921195-MLA74420606310_022024-I.jpg', category: 'smartphones' },

    { id: 'MLA1401603057', name: 'Tcl 40 Se', detail: 'Tcl 40 Se 256 Gb Dark Gray 6 Gb Ram', price: 319999, image: 'http://http2.mlstatic.com/D_728848-MLA74017726443_012024-I.jpg', category: 'smartphones' },

    { id: 'MLA1559167100', name: 'Lige Zl02d', detail: 'Smartband Lige Zl02d Display De 1.28 Con Correa Color Negro', price: 27510, image: 'http://http2.mlstatic.com/D_833296-MLA72363386722_102023-I.jpg', category: 'accessories' },

    { id: 'MLA1882837648', name: 'Moto E22', detail: 'Motorola Moto E22 64gb Azul 4gb Ram', price: 247999, image: 'http://http2.mlstatic.com/D_948595-MLU74223977126_022024-I.jpg', category: 'smartphones' },

    { id: 'MLA1503305306', name: 'Cargador 20w', detail: 'Cargador 20w iPhone Carga Rápida + Cable Usb C Original', price: 28222.4, image: 'http://http2.mlstatic.com/D_766306-MLA72038863890_102023-I.jpg', category: 'accessories' },

    { id: 'MLA1401664336', name: 'Galaxy A04s', detail: 'Samsung Galaxy A04s 4 + 128gb Color Blanco', price: 282999, image: 'http://http2.mlstatic.com/D_770416-MLA74084789641_012024-I.jpg', category: 'smartphones' },

    { id: 'MLA1775602592', name: 'Nictom Nt16', detail: 'Smartwatch Redondo Nictom Smartwatch Nt16 1,28 Caja Plástica Negra, Malla De Tpu Negra, Sumergible', price: 41249.25, image: 'http://http2.mlstatic.com/D_945154-MLA74220117321_012024-I.jpg', category: 'accessories' },

    { id: 'MLA1824897752', name: 'Moto G24', detail: 'Motorola Moto G24 128 Gb Matte Charcoal 4 Gb Ram', price: 369999, image: 'http://http2.mlstatic.com/D_742688-MLU77221454523_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1843994286', name: 'Moto Buds 065', detail: 'Auricular Motorola Moto Buds 065 Black Color Negro', price: 39999, image: 'http://http2.mlstatic.com/D_701243-MLU77741511548_072024-I.jpg', category: 'accessories' },

    { id: 'MLA1747887804', name: 'Quantum Yolo Plus', detail: 'Quantum Yolo Plus 32 Gb Negro 2 Gb Ram', price: 119998, image: 'http://http2.mlstatic.com/D_917278-MLA75756648671_042024-I.jpg', category: 'smartphones' },

    { id: 'MLA1202815360', name: 'Alcatel 1 Ultra', detail: 'Alcatel 1 Ultra 32 Gb Negro 1 Gb Ram', price: 63399, image: 'http://http2.mlstatic.com/D_709575-MLA51915956181_102022-I.jpg', category: 'smartphones' },

    { id: 'MLA1790420604', name: 'Blade V50', detail: 'Zte Blade V50 Design 256 Gb Negro 6 Gb Ram (+10 Gb Ram Virtuales)', price: 269999, image: 'http://http2.mlstatic.com/D_931822-MLA76569776249_052024-I.jpg', category: 'smartphones' },

    { id: 'MLA1704872048', name: 'Nictom Nt14', detail: 'Reloj Inteligente Cuadrado Nictom Nt14 Smartwatch Resistente Agua Ritmo Cardiaco', price: 47799, image: 'http://http2.mlstatic.com/D_853948-MLU74221423759_012024-I.jpg', category: 'accessories' },

    { id: 'MLA1704857340', name: 'Blade A33 Plus', detail: 'Zte Blade A33 Plus 32 Gb Space Gray 2 Gb Ram', price: 139999, image: 'http://http2.mlstatic.com/D_883875-MLU71570310175_092023-I.jpg', category: 'smartphones' },

    { id: 'MLA1445777875', name: 'Mini Impresora', detail: 'Mini Impresora Térmica Bluetooth Recargable Portátil Rosa Color Rosa Chicle West', price: 28216, image: 'http://http2.mlstatic.com/D_924086-MLU74474535725_022024-I.jpg', category: 'accessories' },

    { id: 'MLA1842230910', name: 'Moto G04', detail: 'Motorola Moto G04 64gb Sea Green 4gb Ram', price: 271099, image: 'http://http2.mlstatic.com/D_977111-MLU76290266257_052024-I.jpg', category: 'smartphones' },

    { id: 'MLA1441614319', name: 'Galaxy A05', detail: 'Samsung Galaxy A05 128 Gb Negro 4 Gb Ram', price: 321998, image: 'http://http2.mlstatic.com/D_713582-MLA77213064255_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1275520851', name: 'Imilab W01', detail: 'Smartwatch Reloj Inteligente Imilab W01 Negro Spo2 1.69', price: 34864, image: 'http://http2.mlstatic.com/D_885041-MLU77280276564_072024-I.jpg', category: 'accessories' },

    { id: 'MLA1446798925', name: 'Redmi 13c', detail: 'Xiaomi Redmi 13c Dual Sim 256 Gb Navy Blue 8 Gb Ram', price: 345001.38, image: 'http://http2.mlstatic.com/D_655474-MLA77736925914_072024-I.jpg', category: 'smartphones' },

    { id: 'MLA1496806056', name: 'Aro De Luz Led', detail: 'Aro De Luz Led 30 Cm Con Trípode Extensible 2 Metros', price: 25369, image: 'http://http2.mlstatic.com/D_654013-MLA71530513122_092023-I.jpg', category: 'accessories' },

    { id: 'MLA1822487048', name: 'Redmi Buds 5', detail: 'Auriculares Inalámbricos Xiaomi Redmi Buds 5  Black', price: 51999, image: 'http://http2.mlstatic.com/D_908979-MLU77749836156_092024-I.jpg', category: 'accessories' },

    {
        id: "MLA1288022181",
        name: "Teclado Mini Gamer",
        detail: "Teclado Mini Gamer Xinua K1 Luz Rgb Nivel Brillo Español Usb Color Del Teclado Negro",
        price: 25990,
        image: "http://http2.mlstatic.com/D_967095-MLA49011308992_022022-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1848679454",
        name: "Netbook Exomate X5",
        detail: "Netbook Exomate X5-s1441p Intel N4020c 4gb Ssd128gb 11,6 W11 Color Gris",
        price: 329999,
        image: "http://http2.mlstatic.com/D_716463-MLU75318989912_032024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1425220937",
        name: "Lápiz Óptico Carrello",
        detail: "Lápiz Óptico Carrello K811 Capacitivo Universal Tablet Celulares Blanco",
        price: 23999.4,
        image: "http://http2.mlstatic.com/D_906131-MLU77871867068_072024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1791767344",
        name: "Micrófono Condenser",
        detail: "Micrófono Condenser Trípode Omnidireccional Pc Notebook Color Azul",
        price: 19605.17,
        image: "http://http2.mlstatic.com/D_656995-MLU75592860262_042024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1442066785",
        name: "Cargador Universal",
        detail: "Cargador Universal Notebook Laptop 8 Puntas 12 - 24v",
        price: 11209.41,
        image: "http://http2.mlstatic.com/D_969458-MLU78033152592_082024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1719138632",
        name: "Desk Pad Gigante",
        detail: "Desk Pad Gigante Xxl Escritorio Gamer Oficina 84 X 38 Cm Color Mapa Diseño Impreso Maps Cdtek",
        price: 9999,
        image: "http://http2.mlstatic.com/D_951234-MLU77569631422_072024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1868579394",
        name: "Notebook Exo Q9",
        detail: "Notebook Exo Q9-3182 Intel I3 12va 8gb Ssd256gb 15,6 W11 Color Gris",
        price: 799999.2,
        image: "http://http2.mlstatic.com/D_882319-MLU78190755059_082024-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1704019904",
        name: "Extensor Tp-link",
        detail: "Extensor De Rango Tp-link Tl-wa850re V7 - Blanco",
        price: 28991,
        image: "http://http2.mlstatic.com/D_619528-MLA48679650394_122021-I.jpg",
        category: "computers"
    },
    {
        id: "MLA1445998549",
        detail: "Kit Starlink De Internet Vía Satélite",
        price: 499999,
        image: "http://http2.mlstatic.com/D_737083-MLU75256580508_032024-I.jpg",
        category: "computers",
        name: "Kit Starlink"
    },
    {
        id: "MLA1110771816",
        detail: "Microsoft Mouse 1850 Wireless Negro",
        price: 10669,
        image: "http://http2.mlstatic.com/D_713409-MLU72644138849_112023-I.jpg",
        category: "computers",
        name: "Mouse Microsoft 1850"
    },
    {
        id: "MLA1813586224",
        detail: "Kindle 2022 11 Gen E-reader 16gb Color Azul",
        price: 217833,
        image: "http://http2.mlstatic.com/D_757530-MLU71274219750_082023-I.jpg",
        category: "computers",
        name: "Kindle 2022 Azul"
    },
    {
        id: "MLA1600354692",
        detail: "Gamepad Redragon Harrow Pro Wireless G808pro Joystick Pc Ps3 Color Negro",
        price: 48499,
        image: "http://http2.mlstatic.com/D_840551-MLU76723399406_062024-I.jpg",
        category: "computers",
        name: "Gamepad Redragon Harrow Pro"
    },
    {
        id: "MLA1816362692",
        detail: "Lenovo Ideapad Amd Ryzen 5 5500u (4.0 Ghz) 8gb Ram 512gb Ssd Color Plateado",
        price: 869499,
        image: "http://http2.mlstatic.com/D_946789-MLU76731928903_052024-I.jpg",
        category: "computers",
        name: "Lenovo Ideapad Ryzen 5"
    },
    {
        id: "MLA1777709142",
        detail: "Cartucho Hp 664 Kit X2, Negro Y Color",
        price: 39000,
        image: "http://http2.mlstatic.com/D_950197-MLU76394007878_052024-I.jpg",
        category: "computers",
        name: "Cartucho HP 664"
    },
    {
        id: "MLA1327109951",
        detail: "Desk Pad Gigante Xxl Escritorio Gamer Oficina 84 X 38 Cm Color Negro Diseño Impreso Liso Cdtek",
        price: 9999,
        image: "http://http2.mlstatic.com/D_632900-MLU70019822493_062023-I.jpg",
        category: "computers",
        name: "Desk Pad Xxl Negro"
    },
    {
        id: "MLA1388944357",
        detail: "Puntero Powerpoint Para Presentaciones Wireless Con Laser",
        price: 11969,
        image: "http://http2.mlstatic.com/D_912997-MLU72637586587_112023-I.jpg",
        category: "computers",
        name: "Puntero Powerpoint Wireless"
    },
    {
        id: "MLA1744957600",
        detail: "Notebook Gamer Rog Strix G15 G513rc-hn091w 15.6 Ry…6gb 512gb Ssd Nvidia Geforce Rtx 3050 144 Hz W11",
        price: 2254099,
        image: "http://http2.mlstatic.com/D_745763-MLU78730391329_082024-I.jpg",
        category: "computers",
        name: "Notebook Rog Strix G15"
    },
    {
        id: "MLA907011417",
        detail: "Estabilizador De Tensión Atomlux Linea R R1000@ 1000va Entrada Y Salida De 220v",
        price: 59499,
        image: "http://http2.mlstatic.com/D_633945-MLU72571586372_112023-I.jpg",
        category: "computers",
        name: "Estabilizador Atomlux R1000"
    },
    {
        id: "MLA1430096665",
        detail: "Pencil Carrello Id766 Para iPad Apple Optico Capacitivo Color Blanco",
        price: 37999,
        image: "http://http2.mlstatic.com/D_726940-MLU75926838708_042024-I.jpg",
        category: "computers",
        name: "Pencil Carrello iPad"
    },
    {
        id: "MLA828975423",
        detail: "Mouse Logitech M170 Inalambrico Usb - Negro",
        price: 11528,
        image: "http://http2.mlstatic.com/D_969208-MLU72627875418_112023-I.jpg",
        category: "computers",
        name: "Mouse Logitech M170"
    },
    {
        id: "MLA1384256409",
        detail: "Joystick Redragon Saturn G807",
        price: 34289,
        image: "http://http2.mlstatic.com/D_705099-MLA45315852982_032021-I.jpg",
        category: "computers",
        name: "Joystick Redragon Saturn"
    },
    {
        id: "MLA1398408847",
        detail: "Disco Sólido Interno Kingston Sa400s37/960g Sata 960gb Negro",
        price: 102704,
        image: "http://http2.mlstatic.com/D_889566-MLU77951174552_082024-I.jpg",
        category: "computers",
        name: "SSD Kingston 960GB"
    },
    {
        id: "MLA1809099144",
        detail: "Notebook Inspiron 3525 15.5 Color Plata 32gb De Ram - 256gb Ssd - Amd Ryzen 5",
        price: 1170679,
        image: "http://http2.mlstatic.com/D_696185-MLA54896761378_042023-I.jpg",
        category: "computers",
        name: "Notebook Inspiron 3525"
    },
    {
        id: "MLA883401300",
        detail: "Monitor Curvo Samsung 24 Pulgadas Lc24f390fhxzd 1800r 60 Hz Full Hd",
        price: 123999,
        image: "http://http2.mlstatic.com/D_686145-MLA48721818298_012022-I.jpg",
        category: "computers",
        name: "Monitor Samsung 24\" Curvo"
    },
    {
        id: "MLA1136781291",
        detail: "Monitor Gamer Curvo Samsung 27 Pulgadas Lc27f390fhxzd 60 Hz Full Hd",
        price: 153999,
        image: "http://http2.mlstatic.com/D_653154-MLA48721848383_012022-I.jpg",
        category: "computers",
        name: "Monitor Samsung 27\" Curvo"
    }

];

// const siteId = 'MLA';
// const categoryId = 'MLA1051';
// const url = `https://api.mercadolibre.com/sites/${siteId}/search?category=${categoryId}`;
// const MOBILES_URL = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1051"


const categories = [
    { id: 'MLA3502', name: 'Accesorios para Celulares' },

    { id: 'MLA1055', name: 'Smartphones' },

    { id: 'MLA1058', name: 'Handies y Radiofrecuencia' },

    { id: 'MLA401278', name: 'Lentes de Realidad Virtual' },

    { id: 'MLA3813', name: 'Repuestos de Celulares' },

    { id: 'MLA417704', name: 'Smartwatches y Accesorios' },

    { id: 'MLA10616', name: 'Tarifadores y Cabinas' },

    { id: 'MLA1053', name: 'Telefonía Fija e Inalámbrica' },

    { id: 'MLA5237', name: 'Telefonía IP' },
    
    {id : 'MLA431677',	name : 'Relojes'},

    { id: 'MLA1915', name: 'Otros' }
]

export function formatData(categories, data) {
    const formatedData = data.map(item => {
        const itemCategory = categories.find(c => c.id == item.category_id)
        const shortName = item.attributes.find(attr => attr.id === "MODEL")?.value_name;
        const brand = item.attributes.find(attr => attr.id === "BRAND")?.value_name;
        return (
            {
                id: item.id,
                title: item.title,
                name: `${brand} ${shortName} `|| "Nombre no disponible",
                price: item.price,
                image: item.thumbnail,
                category: itemCategory ? itemCategory.name : "Otras categorias"
            }
        )
    })

    return formatedData
}

export async function getItems() {
    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055");
    const data = await response.json();
    return formatData(categories,data.results);
}



function binarySearch(array,target){
    let low = 0
    let high = array.length - 1

    while (low <= high){
        let middle = Math.floor((low + high) / 2)
        let guess = array[middle].id
        if (guess == target){
            return true
        } else if (guess > target){
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
    return false
}