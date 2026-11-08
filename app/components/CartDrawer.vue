<!-- app/components/CartDrawer.vue -->
<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
</script>

<template>
  <div>
    <!-- Fondo atenuado -->
    <div 
      v-if="cart.isDrawerOpen" 
      class="fixed inset-0 bg-migs-logo/40 backdrop-blur-sm z-40 transition-opacity"
      @click="cart.toggleCart()"
    ></div>

    <!-- Panel lateral -->
    <div 
      class="fixed inset-y-0 right-0 z-50 w-screen max-w-md bg-migs-bg shadow-2xl border-l border-migs-border transform transition-transform duration-300 ease-in-out flex flex-col"
      :class="cart.isDrawerOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'"
      :aria-hidden="!cart.isDrawerOpen"
    >
      <!-- Cabecera del carrito -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-migs-border">
        <h2 class="text-lg font-medium text-migs-logo">Tu Carrito</h2>
        <button @click="cart.toggleCart()" class="text-migs-text hover:text-migs-logo transition-colors">
          Cerrar &times;
        </button>
      </div>

      <!-- Lista de productos -->
      <div class="flex-1 overflow-y-auto p-6">
        <div v-if="cart.items.length === 0" class="text-center text-migs-text mt-10">
          El carrito está vacío.
        </div>
        <ul v-else class="space-y-6">
          <li v-for="item in cart.items" :key="item.id" class="flex gap-4">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-md border border-migs-border" />
            <div class="flex-1">
              <h3 class="text-sm font-medium text-migs-logo">{{ item.name }}</h3>
              <p class="text-xs text-migs-text mt-1">Cant: {{ item.quantity }}</p>
              <div class="flex justify-between items-center mt-2">
                <span class="text-sm font-semibold text-migs-logo">{{ item.price }} €</span>
                <button @click="cart.removeFromCart(item.id)" class="text-xs text-red-400 hover:text-red-300">Eliminar</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Pie del carrito (Checkout) -->
      <div class="border-t border-migs-border p-6 bg-white">
        <div class="flex justify-between text-base font-medium text-migs-logo mb-4">
          <p>Subtotal</p>
          <p>{{ cart.totalPrice.toFixed(2) }} €</p>
        </div>
        <button class="w-full bg-migs-logo hover:bg-migs-text text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="cart.items.length === 0">
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>