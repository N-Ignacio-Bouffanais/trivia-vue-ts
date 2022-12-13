<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

let email = ref("");
let password = ref("");
let errMsg = ref("");
const router = useRouter();

const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Succesfully signed in!")
            console.log(auth.currentUser)
            router.push('/game')
        })
        .catch((error) => {
            console.log(error.code)
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/game")
        })
        .catch((error) => {
            console.log(error)
        })
}

</script>
<template>
    <div class="register">
        <h1>Ingresar con una cuenta</h1>
        <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button style="background-color: #009688;" @click="register">Enviar</button></p>
        <p><button style="background-color: #2196f3;" @click="signInWithGoogle">Ingresar con Google</button></p>
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
        text-align: center;
        margin: 2.2rem;
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
        height: 4rem;
        border-radius: 0.5rem;
        font-size: 1.8rem;
        cursor: pointer;
    }
}
</style>