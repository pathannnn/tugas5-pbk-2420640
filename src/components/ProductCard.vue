<template>
  <q-card style="max-width: 350px">
    <q-img src="https://via.placeholder.com/600x400" alt="Product Image" />
    <q-card-section>
      <div class="text-h6">Product Name</div>
      <div class="text-subtitle2">
        This is a product description. It's a great product.
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Buy Now" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style scoped></style>
