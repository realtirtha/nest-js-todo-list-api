import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ErrorMiddleware } from './error/error.middleware';

@Module({
  imports: [TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorMiddleware).forRoutes('*');
  }
}
