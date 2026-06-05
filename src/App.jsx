import { useState } from "react";
import step1Form from "./assets/step1-form.svg";
import step2Form from "./assets/step2-form.svg";


const articles = [
  {
    id: "crear-cuenta",
    title: "Cómo crear tu cuenta en BIMS",
    category: "Primeros pasos",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "Para empezar a usar BIMS necesitás crear una cuenta. El proceso tarda menos de 5 minutos y solo necesitás un correo electrónico y el RUC de tu empresa."
      },
      {
        type: "steps",
        title: "Pasos para crear tu cuenta",
        items: [
          {
            step: 1,
            title: "Ingresá a https://getbims.com/ y hacé clic en Empezar gratis",
            detail: "Vas a ver un formulario donde te pedimos tu nombres, apellidos, nombre de la empresa, correo electrónico y contraseña.",
            image: step1Form
          },
          {
            step: 2,
            title: "Completá tus datos personales",
            detail: "Ingresá tu nombre completo y un correo electrónico al que tengas acceso. Este correo electrónico va a ser tu usuario para entrar a BIMS."
          },
          {
            step: 3,
            title: "Elegí una contraseña segura",
            detail: "Tiene que tener al menos 8 caracteres. Te recomendamos combinar letras, números y símbolos."
          },
          {
            step: 4,
            title: "Verificá tu correo electrónico",
            detail: "Te vamos a enviar un correo de confirmación a la dirección que ingresaste."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿No te llegó el correo electrónico de confirmación?",
        items: [
          "Revisá tu carpeta de spam o correo no deseado.",
          "Si usás Gmail, buscá en las pestañas \"Promociones\" o \"Actualizaciones\".",
          "El correo electrónico llega desde ¿¿noreply@bims.com.py en los próximos 2 minutos.",
          "Si pasaron más de 5 minutos, podés reenviar el correo electrónico desde la pantalla de confirmación."
        ]
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Puedo usar el mismo correo electrónico para más de una empresa?",
            a: "No. Cada cuenta de BIMS necesita un correo electrónico único. Si manejás varias empresas, vas a necesitar un correo electrónico diferente para cada una."
          },
          {
            q: "¿Qué pasa si me equivoco con el correo electrónico?",
            a: "Si te das cuenta en el momento, podés corregirlo en la pantalla de confirmación haciendo clic en \"Modificar correo electrónico\". Si no podés hacerlo, contactá a soporte desde el chat para que te ayudemos a corregirlo."
          }
        ]
      }
    ]
  },
  {
    id: "verificar-correo electrónico",
    title: "Cómo verificar tu correo electrónico",
    category: "Primeros pasos",
    readTime: "1 min",
    content: [
      {
        type: "intro",
        text: "Después de crear tu cuenta, necesitás confirmar tu correo electrónico para activarla. Este paso es obligatorio: sin la verificación, no vas a poder continuar con la configuración."
      },
      {
        type: "steps",
        title: "Cómo confirmar tu correo electrónico",
        items: [
          {
            step: 1,
            title: "Abrí el correo electrónico que te enviamos",
            detail: "Buscá un correo electrónico con el asunto \"Confirmá tu correo en BIMS\" enviado desde hola@bimsapp.com.",
            image: step2Form
          },
          {
            step: 2,
            title: "Hacé clic en \"Confirmar mi correo electrónico\"",
            detail: "El botón te va a redirigir de vuelta a BIMS y es necesario que ingreses el correo, la contraseña y  cuenta va a quedar activa automáticamente."
          },
          {
            step: 3,
            title: "Continuá con la configuración",
            detail: "Una vez confirmado el correo electrónico, podés seguir con el resto del onboarding: cargar el RUC, y completar los datos de la empresa."
          }
        ]
      },
      {
        type: "callout",
        variant: "warning",
        title: "El link de verificación vence a las 48 horas",
        text: "Si no confirmás tu correo electrónico dentro de las 48 horas, el link va a dejar de funcionar. Podés solicitar uno nuevo desde la pantalla de confirmación haciendo clic en \"Reenviar\"."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "Hice clic en el link pero me dice que es inválido",
            a: "Probablemente el link venció o ya fue usado. Pedí un nuevo correo electrónico de verificación desde la pantalla de inicio de sesión, opción \"Reenviar\"."
          },
          {
            q: "¿Puedo cambiar mi correo electrónico después de verificarlo?",
            a: "Sí. Una vez que estés dentro de BIMS, podés cambiarlo desde Configuración → Mi cuenta. Vas a tener que verificar el nuevo correo electrónico también."
          }
        ]
      }
    ]
  },
  {
    id: "ingresar-ruc",
    title: "Cómo ingresar el RUC de tu empresa",
    category: "Configuración inicial",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "El RUC es el número que identifica a tu empresa ante la DNIT. BIMS lo necesita para validar tus datos y asegurarse de que podés emitir facturas con validez legal."
      },
      {
        type: "callout",
        variant: "warning",
        title: "El RUC es obligatorio para crear la cuenta",
        items: [
          "No vas a poder completar el registro en BIMS sin ingresar un RUC válido y habilitado.",
          "Si todavía no tenés RUC, podés tramitarlo en línea en marangatu.set.gov.py. Los pasos son: crear tu usuario en el portal con tu cédula de identidad, completar el formulario de inscripción en el registro único de contribuyentes, y esperar la aprobación (generalmente tarda 24-48 horas hábiles).",
          "Una vez aprobado, vas a recibir tu número de RUC y podés continuar con el registro en BIMS."
        ]
      },
      {
        type: "steps",
        title: "Pasos para ingresar el RUC",
        items: [
          {
            step: 1,
            title: "Ingresá el RUC en el campo de búsqueda",
            detail: "Escribilo sin guión y con el dígito verificador. Ejemplo: 1234560"
          },
          {
            step: 2,
            title: "Hacé clic en Buscar",
            detail: "BIMS consulta automáticamente la base de datos de la DNIT y trae los datos de tu empresa."
          },
          {
            step: 3,
            title: "Revisá los datos que aparecen",
            detail: "Vas a ver el nombre y apellido del titular, tipo empresa y la razón social. Si todo está bien, hacé clic en Continuar."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Dónde encontrás tu RUC?",
        items: [
          "En una factura emitida o recibida por tu empresa.",
          "En tu constancia de inscripción de la DNIT.",
          "En el Sistema Marangatu, ingresando con tu cédula y contraseña."
        ]
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Qué es el dígito verificador?",
            a: "Es el último número del RUC, separado por un guión. Por ejemplo, si tu RUC es 123456-0, el número completo a ingresar es  1234560. Puede tener entre 6 y 8 caracteres."
          },
          {
            q: "El sistema dice que mi RUC no es válido pero yo sé que existe",
            a: "Asegurate de escribirlo sin guiones y sin espacios. Si el problema persiste, verificá que tu RUC esté activo en el Sistema Marangatu o contactá a soporte."
          },
          {
            q: "¿Qué pasa si mi RUC no está habilitado en la DNIT?",
            a: "Si tu RUC no aparece o figura como inactivo, necesitás regularizar la situación directamente ante la DNIT antes de continuar. BIMS no puede completar el registro con un RUC inhabilitado."
          },
          {
            q: "¿Puedo cambiar el RUC después de registrarme?",
            a: "No. El RUC queda vinculado a tu cuenta de forma permanente. Si necesitás cambiar el RUC, tenés que crear una nueva cuenta."
          }
        ]
      }
    ]
  },
  
  {
    id: "medios-de-pago",
    title: "Cómo configurar tus medios de pago y cuentas fondo",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "Los medios de pago le dicen a BIMS cómo recibís el dinero de tus clientes. Por cada medio que habilitás, BIMS crea automáticamente una cuenta fondo donde registra los movimientos."
      },
      {
        type: "steps",
        title: "Pasos para configurar tus medios de pago",
        items: [
          {
            step: 1,
            title: "Seleccioná los medios de pago que usás",
            detail: "Podés elegir uno o más: Efectivo, Transferencia y Tarjetas."
          },
          {
            step: 2,
            title: "Revisá las cuentas fondo asignadas",
            detail: "Cada medio tiene una cuenta fondo predeterminada. Por ejemplo, Efectivo usa \"Caja principal\" y Transferencia usa \"Banco principal\". Podés cambiar estos nombres después."
          },
          {
            step: 3,
            title: "Hacé clic en Guardar",
            detail: "Podés editar esta sección cuando quieras, mientras tanto vas a ver este paso como pendiente."
          }
        ]
      },
      {
        type: "quick_links",
        items: [
          {
            label: "¿Cómo edito una cuenta fondo?",
            detail: "Andá a Configuración → Finanzas → Cuentas de fondos."
          },
          {
            label: "¿Cómo edito mis medios de pago?",
            detail: "Andá a Configuración → Ventas → Medios de pago."
          }
        ]
      },
      {
        type: "explainer",
        title: "¿Qué es una cuenta fondo?",
        text: "Una cuenta fondo es el registro interno donde BIMS anota el dinero que entra y sale según el medio de pago. No es una cuenta bancaria real: es una forma de organizar tus cobros dentro del sistema. Por ejemplo, todo lo que cobrás en efectivo queda registrado en \"Caja principal\", y todo lo que cobrás por transferencia en \"Banco principal\"."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Puedo cambiar los nombres de las cuentas fondo?",
            a: "Sí. Podés editarlos en cualquier momento desde Configuración → Finanzas → Cuentas fondo."
          },
          {
            q: "¿Qué pasa si después quiero agregar un medio de pago que no seleccioné acá?",
            a: "Podés agregar medios de pago en cualquier momento desde Configuración → Ventas → Medios de pago."
          },
          {
            q: "¿Es obligatorio configurar los medios de pago en este paso?",
            a: "Tené en cuenta que sin al menos un medio de pago configurado, no vas a poder registrar ventas."
          }
        ]
      }
    ]
  },
  {
    id: "timbrado",
    title: "Cómo cargar tu habilitación de timbrado",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "El timbrado es el código que la DNIT le asigna a tu empresa para autorizar la emisión de facturas con validez legal. Sin el, podés usar BIMS pero no vas a poder emitir facturas."
      },
      {
        type: "steps",
        title: "Pasos para cargar el timbrado",
        items: [
          {
            step: 1,
            title: "Descargá tu habilitación de timbrado desde el Sistema Marangatu",
            detail: "Ingresá a marangatu.set.gov.py con tu cédula y contraseña. Buscá la sección de timbrado y descargá el documento en PDF."
          },
          {
            step: 2,
            title: "Subí el archivo en BIMS",
            detail: "Hacé clic en \"Seleccionar archivo\" o arrastrá el PDF directamente al área de carga. El archivo tiene que estar en formato PDF y pesar menos de 10 MB."
          },
          {
            step: 3,
            title: "BIMS lee los datos automáticamente",
            detail: "Vamos a extraer el tipo de facturación, el número de timbrado, los datos del punto de venta y de la sucursal, fecha de vencimiento del documento, números de factura, nota de crédito y remisión. Solo necesitás revisar que los datos sean correctos. Y vamos a asignar un nombre al punto de venta y a la sucursal, que podés editar."
          },
          {
            step: 4,
            title: "Revisá y guardá",
            detail: "Si los datos están bien, hacé clic en Guardar. Si algo no coincide, podés corregirlo manualmente antes de guardar."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Qué es el timbrado?",
        text: "Es un código de 8 dígitos que la DNIT asigna a tu empresa para autorizar la emisión de facturas. Tiene una fecha de vencimiento y necesitás renovarlo periódicamente para el caso de la facturación autoimpresa y preimpresa. En estos casos, BIMS te avisa cuando está próximo a vencer. El timbrado de facturación eletrónica no tiene vencimiento."
      },
      {
        type: "callout",
        variant: "warning",
        title: "Podés cargar el timbrado después",
        text: "Si todavía no tenés el documento o preferís hacerlo más tarde, podés dejarlo como pendiente. Pero recordá: no vas a poder emitir facturas hasta que el timbrado esté cargado."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "El sistema no pudo leer los datos de mi PDF",
            a: "Puede pasar si el PDF es una imagen escaneada con baja calidad. Corroborá tener el PDF original que te entrega la DNIT."
          },
          {
            q: "¿Qué pasa cuando mi timbrado vence?",
            a: "BIMS te va a notificar con anticipación para que lo renueves en Marangatu y actualices el documento en Configuración → Timbrado."
          },
          {
            q: "¿Puedo tener más de un timbrado cargado?",
            a: "Sí. Algunas empresas operan con más de un punto de venta. Podés gestionar todos tus timbrados desde Configuración → Timbrado."
          }
        ]
      }
    ]
  },
  {
    id: "facturacion-electronica",
    title: "Facturación electrónica: requisitos y cómo habilitarla",
    category: "Configuración inicial",
    readTime: "4 min",
    content: [
      {
        type: "intro",
        text: "La facturación electrónica te permite emitir facturas con validez legal ante la DNIT sin necesidad de papel. Las facturas se generan, firman y envían digitalmente, reduciendo costos y tiempos de emisión."
      },
      {
        type: "callout",
        variant: "warning",
        title: "Requisitos obligatorios para habilitar la facturación electrónica",
        items: [
          "RUC activo y habilitado en la DNIT.",
          "Timbrado habilitado para facturación electrónica.",
          "Firma digital (.p12 o .pfx) obtenida con un proveedor certificado externo."
        ]
      },
      {
        type: "steps",
        title: "Pasos para habilitar la facturación electrónica",
        items: [
          {
            step: 1,
            title: "Obtené tu firma digital con un proveedor certificado",
            detail: "Solicitá tu certificado de firma digital con un proveedor autorizado como ITTI (https://www.secure.itti.digital/index.html) u otros proveedores certificados. Vas a recibir un archivo .p12 o .pfx con tu clave privada."
          },
          {
            step: 2,
            title: "Cargá la firma digital en BIMS",
            detail: "Andá a Configuración → Facturación electrónica y subí el archivo de firma digital que obtuviste del proveedor certificado."
          },
          {
            step: 3,
            title: "Configurá el CSC y el IDC",
            detail: "El CSC (Código de Seguridad del Contribuyente) y el IDC (Identificador del Certificado) son códigos que la DNIT te asigna. Ingresalos en los campos correspondientes."
          },
          {
            step: 4,
            title: "Emití tu primera factura electrónica",
            detail: "Una vez configurado todo, podés emitir facturas electrónicas desde el módulo de ventas. BIMS las firma automáticamente y las envía a la DNIT."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Dónde obtener la firma digital?",
        text: "Podés tramitarla con proveedores certificados externos como ITTI en https://www.secure.itti.digital/index.html u otros proveedores autorizados por la DNIT. El proceso tarda entre 2 y 5 días hábiles."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Qué diferencia hay entre factura preimpresa y electrónica?",
            a: "La factura preimpresa se imprime en una imprenta autorizada y la electrónica se genera completamente de forma digital. La electrónica es más rápida, económica y no requiere papel."
          },
          {
            q: "¿Cuánto tarda en activarse la facturación electrónica?",
            a: "Una vez que cargues la firma digital y la DNIT valide tus datos, la activación es inmediata. Podés empezar a facturar electrónicamente en el momento."
          },
          {
            q: "¿Qué pasa si la firma digital vence?",
            a: "Las firmas digitales tienen una validez de 1 a 2 años. BIMS te va a notificar con anticipación para que la renueves. Sin firma digital vigente, no vas a poder emitir facturas electrónicas."
          }
        ]
      }
    ]
  },
  {
    id: "productos",
    title: "Cómo agregar productos y precios",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "En BIMS, \"Productos\" abarca los bienes, servicios e insumos que forman parte de tu operación. Configurarlos bien desde el inicio te ahorra trabajo y evita errores en reportes y facturas."
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Qué no es un Producto?",
        text: "Los gastos que no participan del inventario (honorarios, alquileres, servicios básicos) se configuran como Cuentas de Gastos, no como Productos."
      },
      {
        type: "section_heading",
        number: 1,
        title: "Categorías de productos"
      },
      {
        type: "paragraph",
        text: "Antes de cargar tus productos, organizalos en categorías. Esto te permite filtrar reportes, aplicar precios y promociones por grupo, y mantener el catálogo ordenado a medida que crece."
      },
      {
        type: "route",
        steps: ["Configuración", "Categorías de productos", "Crear"]
      },
      {
        type: "paragraph",
        text: "Podés crear jerarquías de dos niveles:"
      },
      {
        type: "example",
        text: "\"Bebidas\" como categoría padre → \"Bebidas Frías\" y \"Bebidas Calientes\" como subcategorías."
      },
      {
        type: "callout",
        variant: "tip",
        title: "Planeá antes de cargar",
        text: "Definí la estructura de categorías antes de agregar productos. Reorganizarlos después toma más tiempo del esperado."
      },
      {
        type: "section_heading",
        number: 2,
        title: "Dar de alta un producto"
      },
      {
        type: "paragraph",
        text: "Para crear un producto nuevo, usá la ruta principal o el acceso rápido del catálogo:"
      },
      {
        type: "route",
        steps: ["Productos", "Crear"]
      },
      {
        type: "note",
        text: "También podés usar el ícono + desde el catálogo."
      },
      {
        type: "subsection_heading",
        title: "Campos principales"
      },
      {
        type: "fields_table",
        rows: [
          { field: "Nombre", description: "Cómo aparece el producto en el POS y en las facturas." },
          { field: "Categoría", description: "A qué categoría pertenece (definida en el paso anterior)." },
          { field: "Código / Código de barras", description: "Para buscarlo rápido en el POS o usar lectora de códigos." },
          { field: "Tipo de IVA", description: "El porcentaje de IVA que corresponde según la normativa fiscal." },
          { field: "Precio de venta", description: "El precio al que lo vendés a tus clientes." },
          { field: "Costo", description: "El valor de adquisición o producción. BIMS lo usa para calcular márgenes." },
          { field: "Unidad de medida", description: "Unidad, kg, litro, etc." },
          { field: "Control de stock", description: "Si BIMS debe descontar unidades del inventario con cada venta.", optional: true },
          { field: "Almacén", description: "Dónde se almacena físicamente este producto.", optional: true }
        ]
      }
    ]
  },
  {
    id: "usuarios",
    title: "Cómo agregar usuarios a tu empresa",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "Podés invitar a otros miembros de tu equipo para que usen BIMS con su propio acceso. Cada usuario tiene un rol que define qué puede ver y hacer dentro del sistema."
      },
      {
        type: "steps",
        title: "Pasos para agregar un usuario",
        items: [
          {
            step: 1,
            title: "Definí el rol del usuario",
            detail: "Antes de crear el usuario, decidí qué tipo de acceso necesita. Un Tipo de Usuario determina qué puede ver y hacer cada persona en el sistema. Consultá la tabla de roles más abajo si tenés dudas."
          },
          {
            step: 2,
            title: "Completá los datos del usuario",
            detail: "Ingresá el nombre completo, correo electrónico y nombre de usuario del empleado. Asigná el Tipo de Usuario que definiste en el paso anterior. Configurá a qué empresa y establecimiento puede acceder. Definí si puede conectarse solo desde la red local o desde cualquier lugar."
          },
          {
            step: 3,
            title: "Hacé clic en Crear usuario",
            detail: "El sistema envía las credenciales de acceso al email registrado. La persona va a recibir un correo para activar su cuenta."
          },
          {
            step: 4,
            title: "Confirmá que el usuario está activo",
            detail: "Una vez que el empleado acepte la invitación, va a aparecer en tu lista de usuarios como activo."
          }
        ]
      },
      {
        type: "roles_table"
      },
      {
        type: "callout",
        variant: "info",
        title: "Te recomendamos el principio de mínimo acceso",
        text: "Asigná siempre el rol más restrictivo que cubra lo que esa persona necesita hacer. Podés ampliar los permisos después si hace falta, pero es más difícil restringirlos una vez que el usuario ya los usó."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Puedo cambiar el rol de un usuario después de crearlo?",
            a: "Sí. Podés editar el rol de cualquier usuario desde Configuración → Usuarios, haciendo clic en el nombre del usuario."
          },
          {
            q: "¿Qué pasa si el usuario no recibe el email de invitación?",
            a: "Pedile que revise su carpeta de spam. Si el problema persiste, podés reenviar las credenciales desde la lista de usuarios haciendo clic en los tres puntos junto al nombre del usuario."
          },
          {
            q: "¿Puedo desactivar un usuario sin eliminarlo?",
            a: "Sí. Desde Configuración → Usuarios → Crear. Podés desactivar el acceso de un usuario sin perder su historial. Podés reactivarlo cuando necesites."
          }
        ]
      }
    ]
  },
  {
    id: "plan",
    title: "Dónde ver los detalles de tu plan",
    tag: "Pendiente de actualizar",
    category: "Cuenta y facturación",
    readTime: "1 min",
    content: [
      {
        type: "intro",
        text: "Podés consultar en cualquier momento qué plan tenés activo, cuándo vence y qué funciones incluye."
      },
      {
        type: "steps",
        title: "Cómo acceder al detalle de tu plan",
        items: [
          {
            step: 1,
            title: "Hacé clic en tu nombre o logo de empresa (esquina superior derecha)",
            detail: "Se despliega el menú de cuenta."
          },
          {
            step: 2,
            title: "Seleccioná Configuración",
            detail: "Entrás a la sección de configuración general de tu cuenta."
          },
          {
            step: 3,
            title: "Ingresá a la pestaña Plan y facturación",
            detail: "Ahí vas a ver el nombre de tu plan, la fecha de renovación, el monto y el historial de pagos."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Querés cambiar de plan?",
        text: "Desde la misma sección podés ver los planes disponibles y upgradear o downgradear según tus necesidades. Los cambios aplican al inicio del siguiente período de facturación."
      },
      {
        type: "placeholder",
        text: "📌 Próximamente: capturas de la pantalla de plan y facturación."
      }
    ]
  }
];

const categoryOrder = ["Primeros pasos", "Configuración inicial", "Cuenta y facturación"];

function CalloutBox({ variant, title, text, items }) {
  const styles = {
    info:    { bg: "#EFF6FF", border: "#BFDBFE", icon: "ℹ️",  titleColor: "#1D4ED8" },
    warning: { bg: "#FFFBEB", border: "#FDE68A", icon: "⚠️",  titleColor: "#92400E" },
    tip:     { bg: "#F0FDF4", border: "#BBF7D0", icon: "💡",  titleColor: "#166534" }
  };
  const s = styles[variant];
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: s.titleColor, marginBottom: items || text ? 8 : 0 }}>
        {s.icon} {title}
      </div>
      {text && <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{text}</p>}
      {items && (
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepList({ items }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {items.map((item) => (
        <div key={item.step} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          <div style={{
            minWidth: 28, height: 28, borderRadius: "50%",
            background: "#2563EB", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, marginTop: 1
          }}>
            {item.step}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#111827", marginBottom: 4 }}>{item.title}</div>
            <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{item.detail}</div>
              {item.image && (
                <img src={item.image} alt="" style={{ marginTop: 12, borderRadius: 8, maxWidth: "100%", border: "1px solid #E5E7EB" }} />
              )}
            
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqList({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 12 }}>Preguntas frecuentes</div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", textAlign: "left", padding: "12px 0",
              background: "none", border: "none", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 14, fontWeight: 600, color: "#111827"
            }}
          >
            {item.q}
            <span style={{ color: "#9CA3AF", fontSize: 18, fontWeight: 300 }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, paddingBottom: 14 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const roles = [
  { rol: "Administrador", accesos: "Acceso completo: configuración, reportes, caja, ventas y compras." },
  { rol: "Vendedor / Cajero", accesos: "Solo POS: registrar ventas y cobros. Sin acceso a configuración ni reportes sensibles." },
  { rol: "Encargado de Compras", accesos: "Módulo de compras y stock. Sin acceso a caja ni configuración financiera." },
  { rol: "Encargado de Sucursal", accesos: "Ventas, caja y reportes de su sucursal. Sin acceso a la configuración general." }
];

function RolesTable() {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 12 }}>Ejemplos de roles comunes</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            <th style={{ background: "#1E3A5F", color: "#fff", textAlign: "left", padding: "10px 14px", borderRadius: "6px 0 0 0", width: "35%" }}>Rol</th>
            <th style={{ background: "#1E3A5F", color: "#fff", textAlign: "left", padding: "10px 14px", borderRadius: "0 6px 0 0" }}>Accesos típicos</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((r, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#F8FAFF" : "#fff" }}>
              <td style={{ padding: "10px 14px", borderBottom: "1px solid #E5E7EB", fontWeight: 600, color: "#1D4ED8", verticalAlign: "top" }}>{r.rol}</td>
              <td style={{ padding: "10px 14px", borderBottom: "1px solid #E5E7EB", color: "#374151", lineHeight: 1.6 }}>{r.accesos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RouteBlock({ steps }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: 6, padding: "5px 10px", fontSize: 13, fontFamily: "'SF Mono', 'Fira Code', monospace", color: "#374151", margin: "8px 0 12px", flexWrap: "wrap" }}>
      {steps.map((s, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {i > 0 && <span style={{ color: "#9CA3AF" }}>›</span>}
          {s}
        </span>
      ))}
    </div>
  );
}

function ExampleBlock({ text }) {
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 6, padding: "10px 14px", fontSize: 14, color: "#374151", margin: "8px 0 12px", borderLeft: "3px solid #2563EB" }}>
      <strong>Ejemplo:</strong> {text}
    </div>
  );
}

function NoteBlock({ text }) {
  return (
    <p style={{ fontSize: 13, color: "#6B7280", marginTop: -4, marginBottom: 12 }}>{text}</p>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 17, fontWeight: 700, color: "#111827", margin: "32px 0 12px", letterSpacing: "-0.01em" }}>
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, background: "#2563EB", color: "#fff", borderRadius: "50%", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
        {number}
      </span>
      {title}
    </div>
  );
}

function SubsectionHeading({ title }) {
  return (
    <div style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "20px 0 10px" }}>{title}</div>
  );
}

function FieldsTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "4px 0 24px", borderRadius: 8, border: "1px solid #E5E7EB", background: "#fff" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
            <th style={{ textAlign: "left", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#9CA3AF", padding: "10px 16px", width: 200 }}>Campo</th>
            <th style={{ textAlign: "left", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#9CA3AF", padding: "10px 16px" }}>¿Para qué sirve?</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #E5E7EB" : "none" }}>
              <td style={{ padding: "12px 16px", fontWeight: 600, color: "#111827", whiteSpace: "nowrap", verticalAlign: "top" }}>
                {row.field}
                {row.optional && (
                  <span style={{ display: "inline-block", marginLeft: 6, background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE", borderRadius: 4, fontSize: 10, fontWeight: 600, padding: "1px 6px", letterSpacing: "0.04em", textTransform: "uppercase", verticalAlign: "middle" }}>
                    Opcional
                  </span>
                )}
              </td>
              <td style={{ padding: "12px 16px", color: "#6B7280", lineHeight: 1.6, verticalAlign: "top" }}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Article({ article }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 8 }}>
        {article.category} · {article.readTime} de lectura
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", lineHeight: 1.3, margin: 0 }}>
          {article.title}
        </h1>
        {article.tag && (
          <span style={{ background: "#FEF3C7", color: "#92400E", border: "1px solid #FDE68A", borderRadius: 4, fontSize: 11, fontWeight: 600, padding: "3px 8px", letterSpacing: "0.03em", whiteSpace: "nowrap" }}>
            {article.tag}
          </span>
        )}
      </div>
      {article.content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 24, borderLeft: "3px solid #2563EB", paddingLeft: 14 }}>
            {block.text}
          </p>
        );
        if (block.type === "steps") return (
          <div key={i}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 16 }}>{block.title}</div>
            <StepList items={block.items} />
          </div>
        );
        if (block.type === "callout") return <CalloutBox key={i} {...block} />;
        if (block.type === "explainer") return (
          <div key={i} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#374151", marginBottom: 8 }}>📖 {block.title}</div>
            <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{block.text}</p>
          </div>
        );
        if (block.type === "roles_table") return <RolesTable key={i} />;
        if (block.type === "quick_links") return (
          <div key={i} style={{ marginBottom: 20 }}>
            {block.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: 10, padding: "10px 14px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 14, color: "#2563EB" }}>→</span>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.label} </span>
                  <span style={{ fontSize: 14, color: "#6B7280" }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        );
        if (block.type === "faq") return <FaqList key={i} items={block.items} />;
        if (block.type === "placeholder") return (
          <div key={i} style={{ background: "#F3F4F6", borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#9CA3AF", fontStyle: "italic" }}>
            {block.text}
          </div>
        );
        if (block.type === "section_heading") return <SectionHeading key={i} number={block.number} title={block.title} />;
        if (block.type === "subsection_heading") return <SubsectionHeading key={i} title={block.title} />;
        if (block.type === "paragraph") return <p key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 8 }}>{block.text}</p>;
        if (block.type === "route") return <RouteBlock key={i} steps={block.steps} />;
        if (block.type === "example") return <ExampleBlock key={i} text={block.text} />;
        if (block.type === "note") return <NoteBlock key={i} text={block.text} />;
        if (block.type === "fields_table") return <FieldsTable key={i} rows={block.rows} />;
        return null;
      })}
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState("crear-cuenta");
  const activeArticle = articles.find(a => a.id === activeId);
  const grouped = categoryOrder.map(cat => ({
    cat,
    items: articles.filter(a => a.category === cat)
  }));

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", display: "flex", height: "100vh", background: "#fff" }}>
      {/* Sidebar */}
      <div style={{ width: 260, borderRight: "1px solid #E5E7EB", padding: "24px 0", overflowY: "auto", background: "#FAFAFA", flexShrink: 0 }}>
        <div style={{ padding: "0 20px 20px", borderBottom: "1px solid #E5E7EB", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>B</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>BIMS</span>
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>Centro de ayuda</div>
        </div>

        {grouped.map(({ cat, items }) => (
          <div key={cat} style={{ marginBottom: 8 }}>
             {cat  ===  "Primeros pasos" && (
              <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", padding: "12px 20px 6px" }}>
                {cat}
              </div>
          )}
            {items.map(a => (
              <button
                key={a.id}
                onClick={() => setActiveId(a.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "8px 20px",
                  background: activeId === a.id ? "#EFF6FF" : "none",
                  border: "none", cursor: "pointer",
                  fontSize: 13.5,
                  color: activeId === a.id ? "#1D4ED8" : "#374151",
                  fontWeight: activeId === a.id ? 600 : 400,
                  borderLeft: activeId === a.id ? "2px solid #2563EB" : "2px solid transparent",
                  lineHeight: 1.4
                }}
              >
                {a.title}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "40px 48px", maxWidth: 720, textAlign: "left" }}>
        {activeArticle && <Article article={activeArticle} />}
      </div>
    </div>
  );
}
