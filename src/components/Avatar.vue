<template>
    <div class="character">
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
</template>
<style lang="scss">
.character {
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
</style>