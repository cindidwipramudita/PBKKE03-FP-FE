import axios from "axios";

export default {
  data() {
    return {
      name: "",
      number: "",
      route: "",
      origin: "",
      destination: "",
      time: "",
      price: "",
    };
  },
  methods: {
    addTrain() {
      const trainData = {
        name: this.name,
        number: this.number,
        route: this.route,
        current: this.origin,
        destination: this.destination,
        time: this.time,
        price: this.price,
      };
      axios
        .post("http://127.0.0.1:8000/api/train", trainData)
        .then((response) => {
          // Tangani respons berhasil
          console.log(response.data);
        })
        .catch((error) => {
          // Tangani respons error
          console.error(error);
        });
    },
  },
};
