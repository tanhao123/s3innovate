import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1709184192737 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO public.building VALUES (1, 'A', 'Car Park', 'A-CarPark', 80.620);",
    );
    await queryRunner.query(
      "INSERT INTO public.root VALUES (1, 'HCMC'); INSERT INTO public.root VALUES (2, 'HN');",
    );
    await queryRunner.query(
      "INSERT INTO public.district VALUES (1, 'D1', 1); INSERT INTO public.district VALUES (2, 'D2', 1);",
    );
    await queryRunner.query(
      "INSERT INTO public.district VALUES (3, 'HOAN KIEM', 2); INSERT INTO public.district VALUES (4, 'BA DINH', 2);",
    );
    await queryRunner.query(
      "INSERT INTO public.ward VALUES (1, 'P1 - Quan 1', 1); INSERT INTO public.ward VALUES (2, 'P2 - Qian 1', 1);",
    );
    await queryRunner.query(
      "INSERT INTO public.ward VALUES (3, 'P1-HOAN KIEM', 3); INSERT INTO public.ward VALUES (4, 'P2 - HOAN KIEM', 3);",
    );
  }

  public async down(): Promise<void> {}
}
