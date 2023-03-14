<template>
  <form @submit="submit">
    <div class="container">
      <Baseinput
        v-model="review.name"
        :modelValue="name"
        :error="errors.name"
        @input="onInputName"
        label="Navn"
        type="text"
        class="field"
      />

      <Baseinput
        v-model="review.email"
        :modelValue="email"
        :error="errors.email"
        @input="onInputEmail"
        label="Epost"
        type="email"
        class="field"
      />

      <label>Melding</label>
      <textarea
        v-model="review.message"
        @input="onMessageInput"
        placeholder="Melding"
        name="Melding"
        id="melding"
      ></textarea>
      <p id="error" class="messageValidering" v-if="errors.message">
        {{ errors.message }}
      </p>
      <p class="messageValidering">{{ review.message.length }} / 100</p>

      <div id="SendBtn">
        <button type="submit" class="btn" id="SendBtn">Send</button>
      </div>
    </div>
  </form>
</template>
<script>
import Baseinput from "../components/Form/Baseinput.vue";
import service from "@/services/service.js";
import { useField, useForm } from "vee-validate";
import { string, object } from "yup";

export default {
  components: {
    Baseinput,
  },
  data() {
    return {
      review: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    onInputName(e) {
      this.name = e.target.value;
      this.$store.commit("UPDATE_NAME", e.target.value);
    },
    onInputEmail(e) {
      this.email = e.target.value;
      this.$store.commit("UPDATE_EMAIL", e.target.value);
    },
    onMessageInput(e) {
      this.message = e.target.value;
    },
    /**async postReview() {
      let response = await service.loginRequest();
      console.log(response);
      if (service.isLoginSuccessful(response)) {
        alert(response.data.status);
      }
    },*/
  },

  setup() {
    const validationSchema = object({
      name: string("Dette var merkelig").required("Obligatorisk felt"),
      email: string()
        .email("Denne eposten er ikke gyldig")
        .required("Obligatorisk felt"),
      message: string()
        .max(100, "Du er over max-grensen")
        .required("Obligatorisk felt"),
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
    });

    const { value: name } = useField("name");
    const { value: email } = useField("email");
    const { value: message } = useField("message");

    const submit = handleSubmit((values) => {
      service.postReview(values);
    });
    return {
      email,
      name,
      message,
      errors,
      submit,
    };
  },

  created() {
    if (this.$store != undefined) {
      this.review.name = this.$store.state.review.name;
      this.review.email = this.$store.state.review.email;
    }
    if (this.review.name != "") {
      this.name = this.review.name;
    }
    if (this.review.email != "") {
      this.email = this.review.email;
    }
  },
};
</script>

<style scoped>
label {
  display: block;
}
.field {
  height: 40px;
  width: 50%;
  margin-top: 5px;
  margin-bottom: 5px;
}
#melding {
  width: 100%;
  height: 200px;
  resize: none;
}
#SendBtn {
  text-align: right;
}
#error {
  color: red;
}
.messageValidering {
  font-size: small;
}
</style>
