<template>
    <div class="form-container">
        <div class="character">
            <h2>Elige un avatar</h2>
            <div class="characters">
                <button class="avatar ninja">
                    <font-awesome-icon icon="fa-solid fa-user-ninja" />
                </button>
                <button class="avatar astronaut">
                    <font-awesome-icon icon="fa-solid fa-user-astronaut" />
                </button>
                <button class="avatar secret">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </button>
                <button class="avatar robot">
                    <font-awesome-icon icon="fa-solid fa-robot" />
                </button>
                <button class="avatar wizard">
                    <font-awesome-icon icon="fa-solid fa-hat-wizard" />
                </button>

            </div>
        </div>
        <form class="form" action="" method="post">
            <p>
                <input type="text" name="name" id="name" placeholder="Ingrese su nombre" />
            </p>
            <p>
                <input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" />
            </p>
            <button class="submit-button">Listo</button>
        </form>
    </div>
</template>
<style lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;

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
    }

    input {
        border: none;
        width: 30rem;
        height: 5rem;
        font-size: 2rem;
        border-radius: 0.7rem;
        padding-left: 1.5rem;
        margin: 2rem auto;
    }
}

.character {
    margin: 2rem auto;

    h2 {
        font-size: 2.8rem;
        margin: 2rem auto;
        letter-spacing: 0.1rem;
        color: #eb3936;
        width: 28rem;
        text-align: center;
    }

    .characters {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .avatar {
            border: none;
            width: 7.5rem;
            height: 7.5rem;
            border-radius: 50%;
            margin: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                transform: translateX(0) scale(1.05);
                cursor: pointer;
            }

            svg {
                width: 4.5rem;
                height: 4.5rem;
                color: black;
            }
        }

        .ninja {
            background-color: rgb(160, 0, 160);
        }

        .secret {
            background-color: yellow;
        }

        .astronaut {
            background-color: springgreen;
        }

        .robot {
            background-color: #00b0ff;
        }

        .wizard {
            background-color: #f500a7;
        }
    }
}
</style>