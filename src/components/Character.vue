<template>
    <div class="form-container">
        <form action="" method="post">
            <p>
                <input type="text" name="name" id="name" placeholder="Ingrese su nombre" />
            </p>
        </form>
        <div class="character">
            <h2>Por favor, eliga un personaje</h2>
        </div>
    </div>
</template>
<style lang="scss">
.form-container{
    input{
        border: none;
        width: 30rem;
        height: 5rem;
        font-size: 2rem;
        border-radius: 0.7rem;
        padding-left: 1.5rem;
    }
}
.character {
    h2 {
        font-size: 2rem;
        margin: 1.5rem 0;
    }
}
</style>