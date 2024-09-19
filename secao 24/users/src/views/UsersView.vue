<template>
    <div>
        <h1>Painel Adm!</h1>

        <table class="table">
        <thead>
            <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ processRole(user.role) }}</td>
                <td>
                    <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
                        <button class="button is-success">Editar</button>
                    </router-link> | 
                    <button class="button is-danger" @click="showModalUser(user.id)">Deletar</button>
                </td>
            </tr>
        </tbody>
        </table>

        <!-- Modal -->
        <div :class="{ modal: true, 'is-active': showModal }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Você quer realmente deletar este usuário?
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>Esta ação é irreversível. Deseja continuar?</p>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
                    <a href="#" class="card-footer-item" @click="deleteUser()">Sim, quero deletar!</a>
                </footer>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            showModal: false,
            deleteUserId: null
        }
    },
    async created() {
        const req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };
        try {
            const res = await axios.get("http://localhost:8686/user", req);
            this.users = res.data;
        } catch (err) {
            console.error(err);
            alert('Erro ao carregar usuários. Tente novamente mais tarde.');
        }
    },
    methods: {
        hideModal() {
            this.showModal = false;
        },
        showModalUser(id) {
            this.deleteUserId = id;
            this.showModal = true;
        },
        async deleteUser() {
            const req = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            };

            try {
                await axios.delete(`http://localhost:8686/user/${this.deleteUserId}`, req);
                this.users = this.users.filter(u => u.id !== this.deleteUserId);
                this.hideModal();
                alert('Usuário deletado com sucesso!');
            } catch (err) {
                console.error(err);
                alert('Erro ao deletar o usuário. Tente novamente mais tarde.');
            }
        },
        processRole(role) {
            if (role === 0) {
                return "Usuário comum";
            } else if (role === 1) {
                return "Admin";
            }
        }
    }
}
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
