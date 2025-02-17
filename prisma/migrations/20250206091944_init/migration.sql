-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
