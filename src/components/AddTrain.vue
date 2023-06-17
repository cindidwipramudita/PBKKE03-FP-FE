<template>
  <div class="container why-us">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Tambah Data</div>
          <br />
          <div class="card-body">
            <form @submit.prevent="addUser">
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                >
                  Train Name</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="name"
                    type="text"
                    placeholder="Enter Train Name"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                >
                  Train Number</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="number"
                    type="text"
                    placeholder="Enter Train Number"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                  >Train Route</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="route"
                    type="text"
                    placeholder="Format: [Source] - [Destination]"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                  >Departure</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="origin"
                    type="text"
                    placeholder="Enter Source/Departure"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                  >Arrival</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="destination"
                    type="text"
                    placeholder="Enter Destination/Arrival"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                  >Departure Time</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="time"
                    type="text"
                    placeholder="Enter Train's Departure Time"
                  />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label
                  class="col-12 col-sm-3 col-form-label text-sm-right"
                  for="inputText3"
                  >Price</label
                >
                <div class="col-12 col-sm-8 col-lg-6">
                  <input
                    class="form-control"
                    v-model="price"
                    type="text"
                    placeholder="Enter Total Number of Passengers"
                  />
                </div>
              </div>
              <br />

              <div class="form-group">
                <button class="btn btn-primary mx-3">Simpan</button>
                <a class="btn btn-danger mx-3">Kembali</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trainApi from "../composable/trainAPI";
// import axios from "axios";

export default {
  mixins: [trainApi], // Menggabungkan trainApi.js sebagai mixin
};
</script>
