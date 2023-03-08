<template>
  <div id="form">
    <div id="waterform">

      <div class="formgroup" id="name-form">
        <label for="name">Your name*</label>
        <input class="ipt" :class="{ 'incomplete': incomplete && !user.name }" type="text" v-model="user.name" />

      </div>

      <div class="formgroup" id="email-form">
        <label for="email">Your e-mail*</label>
        <input class="ipt" :class="{ 'incomplete': incomplete && !user.email }" type="email" v-model="user.email" />
        <p v-if="!isValidEmail">Vui lòng nhập địa chỉ email hợp lệ</p>
      </div>
      <div class="formgroup" id="phone-form">
        <label for="phone number">Your phone number*</label>
        <input class="ipt" :class="{ 'incomplete': incomplete && !user.phoneNumber }" type="tel"
          v-model="user.phoneNumber" />
        <p v-if="!isValidPhoneNumber">Vui lòng nhập số điện thoại hợp lệ</p>

      </div>
      <button class="ipt btn" @click="postData">ADD YOUR INFORMATION</button>
      <p v-if="incomplete">**complete all data**</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        phoneNumber: ''
      },
      incomplete: false,
      isValidEmail: true,
      isValidPhoneNumber: true
    }
  },
  methods: {
    async postData() {
      if (!this.user.name || !this.user.email || !this.user.phoneNumber || !this.isValidEmail || !this.isValidPhoneNumber) {
        this.incomplete = true
      } else {
        try {
          const res = await axios.post("https://dummyjson.com/users/add", this.user)
          if (res.status == 200) {
            alert("Your in4 OK!");
            this.incomplete = false
          }
          else
            alert("error in adding your in4");

        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  watch: {

    'user.email'() {
      const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
      this.isValidEmail = emailRegex.test(this.user.email);
    }, 'user.phoneNumber'() {
      const phoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
      this.isValidPhoneNumber = phoneNumberRegex.test(this.user.phoneNumber);
    },

  },


}
</script>
<style lang="css">
#form {
  height: 100%;
  overflow: hidden;
  position: relative;

}

#waterform {
  margin: 0 auto;
  width: 500px;
  padding-top: 40px;
  position: relative;


}

.formgroup {
  margin: 30px 0;
}


.ipt {
  display: block;
}

.ipt {
  width: 500px;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 10px;
  font-family: 'Sniglet', cursive;
  font-size: 1em;
  color: #676767;
  transition: border 0.5s;
  -webkit-transition: border 0.5s;
  -moz-transition: border 0.5s;
  -o-transition: border 0.5s;
  border: solid 3px #254150;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

}

.ipt:focus {
  border: solid 3px #099feb;
}

.btn {
  width: 540px;
}

.incomplete {
  border: solid 3px #e60e0e;
}
</style>