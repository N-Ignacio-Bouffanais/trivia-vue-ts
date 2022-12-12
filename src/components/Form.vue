<template>
    <div>
        <form class="form" action="" method="post">
            <p>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
            </p>
            <p>
                <input type="text" name="apellido" id="apellido" placeholder="Enter your last name" />
            </p>
            <button class="submit-button">Ready</button>
        </form>
    </div>
</template>
<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .submit-button {
        border: none;
        width: 15rem;
        height: 5rem;
        border-radius: 0.7rem;
        color: white;
        background-color: #19c762;
        font-size: 2rem;
        cursor: pointer;
    }

    input {
        border: none;
        width: 30rem;
        height: 5rem;
        font-size: 2rem;
        border-radius: 0.7rem;
        padding-left: 1.5rem;
        margin: 0.5rem auto 2.5rem;
    }
}
</style>