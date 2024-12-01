import { Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioComponent } from './usuario-logado/usuario-logado.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

export const routes: Routes = [
    {path:"busca", component:BuscaComponent},
    {path:"cesta", component:CestaComponent},
    { path: 'detalhe/:id', component: DetalheComponent },
//    {path:"detalhe", component:DetalheComponent},
    {path:"login", component:LoginComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"esqueci-senha", component:EsqueciSenhaComponent},
    {path:"redefinir-senha", component:RedefinirSenhaComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"usuario-logado", component:UsuarioComponent},
    {path:"", component:VitrineComponent}
];
