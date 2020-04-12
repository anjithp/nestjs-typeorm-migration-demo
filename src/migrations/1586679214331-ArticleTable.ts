import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticleTable1586679214331 implements MigrationInterface {
    name = 'ArticleTable1586679214331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "author" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article"`, undefined);
    }

}
