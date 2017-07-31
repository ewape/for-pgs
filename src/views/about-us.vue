<template>
    <div class="container">
    
        <ul class="columns-3">
            <li>
                <card v-bind:slug="'/'">
                    <img slot="card-image" src="./../assets/img/card-1.jpg" alt="Card 1" />
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </card>
            </li>
            <li>
                <card v-bind:slug="'/'">
                    <img slot="card-image" src="./../assets/img/card-1.jpg" alt="Card 2" />
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </card>
            </li>
            <li>
                <card v-bind:slug="'/'">
                    <img slot="card-image" src="./../assets/img/card-1.jpg" alt="Card 3" />
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </card>
            </li>
        </ul>
    
    </div>
</template>

<script>

import Card from './../components/card.vue';

export default {
    components: { Card },
    data() {
        return {

        }
    }
}
</script>

