<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

let email = ref("");
let password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Succesfully registered!")
            router.push('/game')
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result)=>{
            console.log(result.user);
            router.push("/game")
        })
        .catch((error)=>{
            console.log(error)
        })
}

</script>
<template>
    <div class="register">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p><button style="background-color: #009688;" @click="register">Submit</button></p>
        <p><button style="background-color: #2196f3;" @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
</template>
<style lang="scss">
.register {
    margin: 3rem 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3.2rem;
        color: #e91e63;
        margin: 2.2rem;
        text-align: center;
    }

    p {
        color: white;
        font-size: 2rem;
        margin: 1.2rem;
    }

    input {
        border: none;
        width: 25rem;
        height: 4rem;
        border-radius: 0.5rem;
        padding-left: 1rem;
        outline: none;
        font-size: 1.4rem;
    }

    button {
        border: none;
        width: 25rem;
        height: 3.5rem;
        border-radius: 0.5rem;
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
}
</style>