-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipoUsuario" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "doadorId" INTEGER,
    "receptorId" INTEGER,
    CONSTRAINT "User_doadorId_fkey" FOREIGN KEY ("doadorId") REFERENCES "ConstrucaoDoador" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_receptorId_fkey" FOREIGN KEY ("receptorId") REFERENCES "ConstrucaoOng" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConstrucaoDoador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeGalpao" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pontoReferencia" TEXT NOT NULL,
    "imgUrl" TEXT,
    "telefone" TEXT NOT NULL,
    "nichoVendas" TEXT NOT NULL,
    "numeroGalpao" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ConstrucaoOng" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeOrganizacao" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "emailInstituicao" TEXT NOT NULL,
    "imgUrl" TEXT,
    "pontoReferencia" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nichoVendas" TEXT NOT NULL,
    "areaAtuacao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Doacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "imgUrl" TEXT,
    "descricao" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "doadorId" INTEGER NOT NULL,
    "ongId" INTEGER,
    CONSTRAINT "Doacao_doadorId_fkey" FOREIGN KEY ("doadorId") REFERENCES "ConstrucaoDoador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Doacao_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ConstrucaoOng" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DoacaoToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DoacaoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Doacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DoacaoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ConstrucaoDoador_email_key" ON "ConstrucaoDoador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ConstrucaoOng_cnpj_key" ON "ConstrucaoOng"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "ConstrucaoOng_emailInstituicao_key" ON "ConstrucaoOng"("emailInstituicao");

-- CreateIndex
CREATE UNIQUE INDEX "_DoacaoToUser_AB_unique" ON "_DoacaoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DoacaoToUser_B_index" ON "_DoacaoToUser"("B");
