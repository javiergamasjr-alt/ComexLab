// Data extracted from ComexLab-check.js

const QB = {

/* â”€â”€ LEGISLACIÃ“N â”€â”€ */
leg_ley_aduanera: [
  { type:"opc", text:"Â¿CuÃ¡l es el objeto principal de la Ley Aduanera de MÃ©xico?",
    ctx:"Ley Aduanera â€” publicada en el DOF, vigente con reformas",
    opts:["Regular exclusivamente el cobro de aranceles de importaciÃ³n","Regular la entrada, salida y control de mercancÃ­as del territorio nacional, asÃ­ como el despacho aduanero","Establecer los aranceles de la Tarifa del IGIE","Normar las actividades de los agentes de carga internacional"],
    ok:1, exp:"La Ley Aduanera regula la entrada, salida y trÃ¡nsito de mercancÃ­as en el territorio nacional, el despacho aduanero, los regÃ­menes aduaneros, las obligaciones de los contribuyentes y las infracciones. No regula solo aranceles.", ref:"Art. 1Â° Ley Aduanera" },
  { type:"opc", text:"SegÃºn la Ley Aduanera, Â¿quiÃ©n puede promover el despacho aduanero de mercancÃ­as por cuenta ajena?",
    ctx:"Despacho aduanero â€” representaciÃ³n",
    opts:["Cualquier persona con poder notarial","Ãšnicamente el Agente Aduanal mediante patente vigente","El importador directamente sin intermediario","El despachador de aduana con licencia estatal"],
    ok:1, exp:"Conforme al Art. 40, solo el Agente Aduanal con patente vigente expedida por el SAT puede promover el despacho por cuenta ajena. El importador puede hacer despacho directo (Art. 59-A) bajo ciertas condiciones.", ref:"Art. 40 y 59-A Ley Aduanera" },
  { type:"vof", text:"El reconocimiento aduanero de mercancÃ­as siempre es fÃ­sico (inspecciÃ³n manual) en MÃ©xico.",
    ctx:"Mecanismo de despacho y reconocimiento",
    opts:["Verdadero â€” toda mercancÃ­a es inspeccionada fÃ­sicamente","Falso â€” existe el mecanismo de selecciÃ³n automatizada (semÃ¡foro) que puede asignar reconocimiento fÃ­sico o solo documental","Verdadero â€” pero solo en aduanas marÃ­timas","Falso â€” ninguna mercancÃ­a se inspecciona fÃ­sicamente"],
    ok:1, exp:"El mecanismo de selecciÃ³n automatizada (semÃ¡foro fiscal) determina aleatoriamente si la mercancÃ­a pasa sin revisiÃ³n (verde) o con reconocimiento aduanero fÃ­sico (rojo). No todas las mercancÃ­as se inspeccionan fÃ­sicamente.", ref:"Art. 43 Ley Aduanera" },
];

const GLOS = [
  {w:"LIGIE / TIGIE",cat:"arancel",cl:"Arancelario",d:"Ley de los Impuestos Generales de ImportaciÃ³n y ExportaciÃ³n. La TIGIE es la Tarifa contenida en dicha ley. Contiene las fracciones arancelarias de 8 dÃ­gitos mÃ¡s el NICO de 2 dÃ­gitos (total 10 dÃ­gitos) con los aranceles aplicables.",r:"LIGIE â€” DOF"},
  {w:"FracciÃ³n Arancelaria (8 dÃ­gitos)",cat:"arancel",cl:"Arancelario",d:"CÃ³digo de 8 dÃ­gitos de la LIGIE que identifica mercancÃ­as: 2 dÃ­gitos de capÃ­tulo + 2 de partida + 2 de subpartida (= 6 del SA) + 2 de apertura nacional. El NICO agrega 2 mÃ¡s para un total de 10 dÃ­gitos.",r:"LIGIE Art. 2"},
  {w:"NICO",cat:"arancel",cl:"Arancelario",d:"NÃºmero de IdentificaciÃ³n Comercial. Dos dÃ­gitos adicionales que se agregan a la fracciÃ³n arancelaria de 8 dÃ­gitos para completar los 10 dÃ­gitos totales de clasificaciÃ³n. Solo aplica donde la LIGIE lo establece expresamente.",r:"LIGIE"},
  {w:"Sistema Armonizado (SA)",cat:"arancel",cl:"Arancelario",d:"Nomenclatura internacional de mercancÃ­as de 6 dÃ­gitos administrada por la OMA. En vigor desde 1988. Es la base de la LIGIE mexicana (que agrega 2 dÃ­gitos nacionales). Se actualiza cada 5-6 aÃ±os.",r:"Convenio SA â€” OMA 1988"},
  {w:"Regla General de InterpretaciÃ³n (RGI)",cat:"arancel",cl:"Arancelario",d:"Conjunto de 6 reglas que establecen el mÃ©todo para clasificar mercancÃ­as en la LIGIE. La RGI 1 es la principal. Se aplican en orden: si la RGI 1 resuelve, las demÃ¡s no aplican.",r:"LIGIE â€” RGI 1 a 6"},
  {w:"Notas Legales",cat:"arancel",cl:"Arancelario",d:"Textos con fuerza de ley que forman parte integral de la LIGIE. Pueden incluir o excluir mercancÃ­as de secciones, capÃ­tulos o partidas, definir tÃ©rminos tÃ©cnicos o limitar el alcance de las RGI. Son obligatorias.",r:"RGI 1 LIGIE"},
  {w:"MerceologÃ­a",cat:"arancel",cl:"Arancelario",d:"Ciencia que estudia las mercancÃ­as desde el punto de vista de su origen, composiciÃ³n, propiedades, usos y clasificaciÃ³n. Es fundamental para la clasificaciÃ³n arancelaria correcta, especialmente en mercancÃ­as de difÃ­cil identificaciÃ³n.",r:"Disciplina cientÃ­fica aplicada"},
  {w:"Pedimento",cat:"doc",cl:"Documentos",d:"Documento electrÃ³nico oficial regulado por la Ley Aduanera mediante el cual se declara el rÃ©gimen aduanero, se describen las mercancÃ­as, se acredita su legal estancia y se pagan las contribuciones al comercio exterior.",r:"Art. 36 Ley Aduanera"},
  {w:"Clave de Pedimento",cat:"doc",cl:"Documentos",d:"CÃ³digo alfanumÃ©rico de 2 caracteres que indica el tipo de operaciÃ³n: A1=ImportaciÃ³n definitiva, A2=ExportaciÃ³n definitiva, IT=ImportaciÃ³n temporal, ET=ExportaciÃ³n temporal, V5=DepÃ³sito fiscal, entre otras.",r:"ApÃ©ndice 2 RGCE"},
  {w:"COVE",cat:"doc",cl:"Documentos",d:"Comprobante de Valor ElectrÃ³nico. Documento electrÃ³nico generado en el portal del SAT que acredita el valor comercial de las mercancÃ­as. Obligatorio desde 2012, se liga al pedimento y sustituye la factura en papel.",r:"Regla 3.1.8 RGCE"},
  {w:"DTA",cat:"doc",cl:"Documentos",d:"Derecho de TrÃ¡mite Aduanero. Se calcula al 0.8% del valor en aduana para importaciones definitivas, con mÃ­nimos y mÃ¡ximos fijados en la LFD. Para exportaciones hay cuotas fijas.",r:"Art. 49 LFD"},
  {w:"Valor en Aduana",cat:"doc",cl:"Documentos",d:"Base gravable para el cÃ¡lculo de aranceles. Se determina principalmente por el mÃ©todo de Valor de TransacciÃ³n (precio pagado o por pagar + ajustes). Los 6 mÃ©todos de valoraciÃ³n provienen del Acuerdo del GATT/OMC.",r:"Arts. 64-78 Ley Aduanera"},
  {w:"Agente Aduanal",cat:"op",cl:"Operaciones",d:"Persona fÃ­sica autorizada por el SAT mediante patente para promover el despacho aduanero por cuenta ajena. Es el Ãºnico autorizado para presentar pedimentos ante las aduanas. Responsable solidario con el importador.",r:"Art. 159 Ley Aduanera"},
  {w:"Despacho Aduanero",cat:"op",cl:"Operaciones",d:"Conjunto de actos y formalidades para la entrada, salida o trÃ¡nsito de mercancÃ­as: presentaciÃ³n del pedimento, pago de contribuciones, reconocimiento aduanero y liberaciÃ³n de la mercancÃ­a.",r:"Art. 35 Ley Aduanera"},
  {w:"SemÃ¡foro Fiscal",cat:"op",cl:"Operaciones",d:"Sistema de selecciÃ³n automatizada aleatorio en aduanas. Verde = mercancÃ­a libre sin reconocimiento. Rojo = reconocimiento aduanero fÃ­sico. El resultado se registra en el pedimento.",r:"Art. 43 Ley Aduanera"},
  {w:"RÃ©gimen Aduanero",cat:"op",cl:"Operaciones",d:"DestinaciÃ³n legal de las mercancÃ­as al cruzar la aduana: importaciÃ³n definitiva, exportaciÃ³n definitiva, importaciÃ³n temporal (IMMEX, admisiÃ³n temporal), depÃ³sito fiscal, trÃ¡nsito, entre otros.",r:"Art. 90 Ley Aduanera"},
  {w:"IMMEX",cat:"op",cl:"Operaciones",d:"Programa para la Industria Manufacturera, Maquiladora y de Servicios de ExportaciÃ³n. Permite importar temporalmente insumos y maquinaria sin pagar IGI ni IVA para producir mercancÃ­as de exportaciÃ³n.",r:"Decreto IMMEX DOF 2006"},
  {w:"PROSEC",cat:"op",cl:"Operaciones",d:"Programas de PromociÃ³n Sectorial. Permiten importar con arancel preferencial (0%-5%) materias primas e insumos para fabricar productos de sectores industriales especÃ­ficos, sin importar el origen.",r:"Decreto PROSEC DOF 2000"},
  {w:"VUCEM",cat:"op",cl:"Operaciones",d:"Ventanilla Ãšnica de Comercio Exterior Mexicano. Portal electrÃ³nico donde se tramitan permisos, autorizaciones y documentos de todas las dependencias (SADER, COFEPRIS, SE, etc.) para el despacho aduanero.",r:"Decreto VUCEM DOF 2011"},
  {w:"IGI",cat:"leg",cl:"Legal",d:"Impuesto General de ImportaciÃ³n. Arancel ad-valorem (generalmente) establecido en la LIGIE para cada fracciÃ³n arancelaria. Base = valor en aduana. Puede ser 0% con tratados de libre comercio si se cumple la regla de origen.",r:"LIGIE"},
  {w:"ISAN",cat:"leg",cl:"Legal",d:"Impuesto Sobre AutomÃ³viles Nuevos. Aplica a la importaciÃ³n definitiva de vehÃ­culos nuevos. Se calcula sobre el precio de venta al consumidor del fabricante o importador conforme a la Ley del ISAN.",r:"Ley Federal del ISAN"},
  {w:"Cuota Compensatoria",cat:"leg",cl:"Legal",d:"Arancel adicional impuesto por la SE a mercancÃ­as importadas en condiciones de dumping (precio artificialmente bajo) o con subsidios del gobierno extranjero. Protege a la industria nacional del daÃ±o material.",r:"Arts. 62-68 Ley de Comercio Exterior"},
  {w:"RRNA",cat:"leg",cl:"Legal",d:"Regulaciones y Restricciones No Arancelarias. Medidas distintas a los aranceles: permisos previos, NOM (Normas Oficiales Mexicanas), cuotas, certificados de sanidad, marcado de origen. Deben declararse en el pedimento.",r:"Art. 17 Ley de Comercio Exterior"},
  {w:"T-MEC",cat:"trat",cl:"Tratados",d:"Tratado MÃ©xicoâ€“EE.UU.â€“CanadÃ¡ (sustituyÃ³ al TLCAN en 2020). Establece preferencias arancelarias (0%) para mercancÃ­as que cumplen reglas de origen, asÃ­ como reglas sobre inversiÃ³n, propiedad intelectual y soluciÃ³n de controversias.",r:"CapÃ­tulos 2-32 T-MEC"},
  {w:"Reglas de Origen",cat:"trat",cl:"Tratados",d:"Criterios para determinar la 'nacionalidad econÃ³mica' de una mercancÃ­a y su elegibilidad a preferencias arancelarias. Incluyen: cambio de clasificaciÃ³n arancelaria, contenido regional mÃ­nimo (VCR/VEN) y procesos productivos especÃ­ficos.",r:"CapÃ­tulo 4-5 T-MEC"},
  {w:"LFPIORPI",cat:"anti",cl:"Antilavado",d:"Ley Federal para la PrevenciÃ³n e IdentificaciÃ³n de Operaciones con Recursos de Procedencia IlÃ­cita (Ley Antilavado). Publicada en 2012. Establece actividades vulnerables y obligaciones preventivas para los sujetos obligados.",r:"DOF 17/10/2012"},
  {w:"UIF",cat:"anti",cl:"Antilavado",d:"Unidad de Inteligencia Financiera de la SHCP. Autoridad receptora de los avisos de los sujetos obligados. Analiza la informaciÃ³n para detectar operaciones de lavado de dinero y la transmite a la FGR cuando detecta conductas delictivas.",r:"LFPIORPI Art. 6"},
  {w:"Actividad Vulnerable",cat:"anti",cl:"Antilavado",d:"Actividades econÃ³micas listadas en el Art. 17 de la LFPIORPI que por su naturaleza pueden ser utilizadas para lavar dinero. Los agentes aduanales que intervengan en importaciÃ³n/exportaciÃ³n estÃ¡n incluidos.",r:"Art. 17 LFPIORPI"},
  {w:"Aviso de Actividad Vulnerable",cat:"anti",cl:"Antilavado",d:"Reporte que los sujetos obligados deben presentar ante la UIF mediante el portal SAII dentro de los 17 dÃ­as hÃ¡biles del mes siguiente. Incluye datos del cliente, descripciÃ³n de la operaciÃ³n y monto.",r:"Art. 24 LFPIORPI"},
];

window.COMEX_QB = QB;

window.COMEX_GLOS = GLOS;