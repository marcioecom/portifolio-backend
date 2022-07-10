-- CreateTable
CREATE TABLE "urls" (
    "id" TEXT NOT NULL,
    "redirectUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);
