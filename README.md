# Testes automatizados com Cypress
niciando a aplicação (Gitlab);

sudo docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce

Execução dos testes:
Interface Gráfica: npm run cy:open
Background: npm run test
Um teste somente: 
    npx cypress run --spec cypress/e2e/api/{nome_teste}
    OU
    npx cypress run --spec cypress/e2e/gui/{nome_teste}

    SSH Key: SHA256:tcTIOa/axp2MRtAH+JAL0Nc+8Pksjs+gFCuZBvNPeVA

    desligar o container: sudo docker container stop <containerID>