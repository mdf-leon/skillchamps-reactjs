import React from 'react';

import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import SubMenu from '../Menu/SubMenu';

import { Container } from './styles';

import { ReactComponent as LogoPaytime } from 'assets/images/PaytimeLogoDegrade.svg';
import { ReactComponent as Resumo } from 'assets/images/sidebar/Resumo.svg';
import { ReactComponent as Vendas } from 'assets/images/sidebar/Vendas.svg';
import { ReactComponent as Suporte } from 'assets/images/sidebar/Suporte.svg';
import { ReactComponent as Antecipacao } from 'assets/images/sidebar/Antecipação.svg';
import { ReactComponent as RelatoriosAndExtratos } from 'assets/images/sidebar/Relatórios e Extratos.svg';
import { ReactComponent as Transferencias } from 'assets/images/sidebar/Transferência.svg';
import { ReactComponent as Pagamentos } from 'assets/images/sidebar/Pagamentos.svg';
import { ReactComponent as Emprestimo } from 'assets/images/sidebar/Empréstimo.svg';
import { ReactComponent as LojaPaytime } from 'assets/images/sidebar/Loja Paytime.svg';
import { ReactComponent as MinhaConta } from 'assets/images/sidebar/Minha Conta.svg';

export default function SideBar() {
  return (
    <Container>
      <Menu logo={LogoPaytime}>
        <MenuItem path="/" label="Resumo" icon={Resumo} />
        <SubMenu label="Vendas" icon={Vendas}>
          <MenuItem label="Simulação de venda" path="/sale/simulated" />
          <MenuItem label="Venda digitada" path="/sale/typed" />
          <MenuItem label="Venda por link" path="/sale/linked" />
        </SubMenu>
        <MenuItem path="/" label="Suporte" icon={Suporte} />
        <MenuItem path="/" label="Antecipação" icon={Antecipacao} />
        <SubMenu label="Relatórios e Extratos" icon={RelatoriosAndExtratos}>
          <MenuItem
            path="/reportsAndStatements/saleHistory"
            label="Histórico de Vendas"
          />
        </SubMenu>
        <MenuItem path="/" label="Tranferências" icon={Transferencias} />

        <SubMenu label="Pagamentos" icon={Pagamentos}>
          <MenuItem path="/payment/billet" label="Boleto" />
        </SubMenu>
        <MenuItem path="/" label="Empréstimo" icon={Emprestimo} />
        <MenuItem path="/" label="Loja Paytime" icon={LojaPaytime} />
        <SubMenu label="Minha Conta" icon={MinhaConta}>
          <MenuItem path="/myaccount/data" label="Meus dados" />
          <MenuItem path="/myaccount/users" label="Usuários" />
        </SubMenu>
      </Menu>
    </Container>
  );
}
