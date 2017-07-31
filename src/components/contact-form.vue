<template>
    <div class="contact-form-wrapper">
        <form action="#" novalidate @submit.stop.prevent="submitForm">
            <md-input-container class="form-row">
                <label>Name</label>
                <md-input v-model="form.name" required></md-input>
            </md-input-container>
            <p class="form-message" v-text="formMessages.name"></p>
    
            <md-input-container class="form-row">
                <label>Email</label>
                <md-input type="email" v-model="form.email" required></md-input>
            </md-input-container>
            <p class="form-message" v-text="formMessages.email"></p>
    
            <md-input-container class="form-row">
                <label>Message</label>
                <md-textarea v-model="form.message"></md-textarea>
            </md-input-container>
    
            <button class="md-button md-raised md-primary md-theme-default" type="submit">Send</button>
        </form>
    
    </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial.MdCore);
Vue.use(VueMaterial.MdInputContainer);
Vue.use(VueMaterial.MdButton);

export default {
    data() {
        return {
            formMessages: {
                name: '',
                email: '',
                message: ''
            },
            form: {
                name: '',
                email: '',
                message: ''
            },
            formSubmitted: false
        }
    },
    methods: {
        setFormMessage(fieldName, message) {
            this.formMessages[fieldName] = message;
        },
        validateEmail(fieldName, fieldValue) {
            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let emailHasInput = fieldValue.trim().length > 0,
                emailValid = reg.test(fieldValue);

            if (emailHasInput) {

                if (emailValid) {
                    this.setFormMessage(fieldName, '');
                }

                else {
                    this.setFormMessage(fieldName, 'Email format is invalid.');
                }
            }

            else {
                this.setFormMessage(fieldName, 'Email field is required.');
            }
        },
        validateText(fieldName, fieldValue) {
            let textValid = fieldValue.trim().length > 0;

            if (!textValid) {
                this.setFormMessage(fieldName, 'This field is required.');
            }

            else {
                this.setFormMessage(fieldName, '');
            }
        },
        validateForm() {
            this.validateText('name', this.form.name);
            this.validateEmail('email', this.form.email);
        },
        submitForm(e) {
            this.formSubmitted = true;
            e.preventDefault();
            this.validateForm();
        }
    },
    watch: {
        'form.name'(newVal) {
            if (this.formSubmitted) {
                this.validateText('name', newVal);
            }
        },
        'form.email'(newVal) {
            if (this.formSubmitted) {
                this.validateEmail('email', newVal);
            }
        }
    },
    // update() {
    //     console.log('m');
    //     let formRows = document.querySelectorAll('.form-row');
    //     formRows = Array.from(formRows);
    //     console.log(formRows);
    //     formRows.map(item => {
    //         console.log(item.classList);
    //         item.classList.remove('is-invalid');
    //     });
    // }
}
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables';
@import '../assets/scss/helpers/mixins';
@import '../assets/scss/helpers/placeholders';

@import '../../node_modules/vue-material/src/components/mdButton/mdButton';
@import '../../node_modules/vue-material/src/components/mdInputContainer/mdInputContainer';
@import '../../node_modules/vue-material/src/components/mdButton/mdButton';

.contact-form-wrapper {
    @extend %card;
    width: 500px;
    max-width: 100%;
    margin: auto;
    padding: 3rem 2rem;
    display: flex;
    min-height: 460px;

    form {
        margin: auto;
        width: 280px;
        max-width: 100%;
        @include clearfix;

        button {
            float: right;
            min-width: 100px;
            margin-top: 3rem;
            margin-right: 0;
        }
    }
}
</style>