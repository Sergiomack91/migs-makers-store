<!-- app/pages/aviso-legal.vue -->
<script setup lang="ts">
const { emailAddress } = useStorefrontContact()
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20 text-migs-text">
    <div class="mb-8 rounded-md border border-migs-border bg-white p-4 text-sm leading-relaxed" role="status">
      <strong class="text-migs-logo">Titular persona física.</strong>
      MIGS Makers no se presenta como una sociedad mercantil. Antes de publicar, revisa qué datos identificativos y
      fiscales corresponden a una actividad de venta habitual y completa el domicilio postal. Confirma también la base
      jurídica del tratamiento y las condiciones de Formspree y Vercel.
    </div>
    <h1 class="text-3xl font-medium tracking-tight text-migs-logo mb-8">Aviso Legal y Política de Privacidad</h1>

    <section class="space-y-8 text-sm leading-relaxed">
      <div>
        <h2 class="text-lg font-medium text-migs-logo mb-3">1. Datos Identificativos</h2>
        <p>La actividad se realiza por una persona física bajo el nombre comercial MIGS Makers:</p>
        <ul class="mt-4 space-y-2 border-l border-migs-border pl-4">
          <li><strong>Titular:</strong> Mario Torrado.</li>
          <li><strong>Forma de titularidad:</strong> persona física; no es una sociedad mercantil registrada.</li>
          <li><strong>Identificación fiscal:</strong> pendiente de confirmar qué dato corresponde incluir según la actividad y la normativa aplicable.</li>
          <li><strong>Domicilio:</strong> Alcalá de Henares, Madrid. Falta completar el domicilio postal que corresponda.</li>
          <li><strong>Nombre comercial:</strong> MIGS Makers.</li>
          <li><strong>Actividad:</strong> venta habitual de piezas propias fabricadas mediante impresión 3D.</li>
          <li><strong>Correo de contacto:</strong> el configurado en la web. Verifica que esté activo y que sea adecuado para recibir comunicaciones legales.</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-medium text-migs-logo mb-3">2. Propiedad Intelectual e Industrial</h2>
        <p>
          Los diseños, fotografías, textos y demás contenidos pueden estar protegidos por derechos de propiedad
          intelectual o industrial. El titular debe contar con los derechos o licencias necesarios para publicar los
          contenidos que no sean propios.
        </p>
      </div>

      <div id="privacidad" class="scroll-mt-24">
        <h2 class="text-lg font-medium text-migs-logo mb-3">3. Política de Privacidad y Protección de Datos (RGPD)</h2>
        <p>
          <strong>Finalidad:</strong> responder consultas sobre las piezas, disponibilidad y personalización.
          Este sitio es un catálogo y no procesa compras ni pagos.
        </p>
        <p class="mt-2">
          <strong>Datos del formulario:</strong> nombre, email, pieza de interés (opcional) y mensaje. El formulario
          transmite la información a Formspree para gestionar su recepción. También se puede contactar mediante email,
          WhatsApp o redes sociales; al usar esos servicios, los datos se tramitan conforme a las condiciones de cada
          plataforma.
        </p>
        <p class="mt-2">
          <strong>Conservación:</strong> las consultas se conservarán durante un mes desde su cierre, salvo que sea
          necesario conservarlas por un pedido o por una obligación legal. Verifica también los plazos aplicados por
          los proveedores y a las copias de correo electrónico.
        </p>
        <p class="mt-2">
          <strong>Base jurídica:</strong> debe confirmarse para cada canal y finalidad antes de publicar. El envío de una
          consulta no debe describirse como consentimiento si se utiliza otra base jurídica.
        </p>
        <p class="mt-2">
          <strong>Proveedores:</strong> Formspree procesa los envíos del formulario y Vercel aloja el sitio. Revisa sus
          condiciones, acuerdos de tratamiento, plazos de conservación, ubicaciones de tratamiento y posibles
          transferencias internacionales, y actualiza esta información si corresponde.
        </p>
        <p class="mt-2">
          <strong>Derechos:</strong> puedes solicitar acceso, rectificación, supresión, oposición, limitación del
          tratamiento y, cuando corresponda, portabilidad, escribiendo a
          <a
            v-if="emailAddress"
            class="font-medium text-migs-logo underline decoration-migs-border underline-offset-2"
            :href="`mailto:${emailAddress}`"
          >{{ emailAddress }}</a>
          <span v-else>el correo de contacto publicado en esta web</span>.
          También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.
        </p>
      </div>
    </section>
  </div>
</template>