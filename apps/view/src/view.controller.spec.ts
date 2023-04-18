import { Test, TestingModule } from '@nestjs/testing';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';

describe('ViewController', () => {
  let viewController: ViewController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ViewController],
      providers: [ViewService],
    }).compile();

    viewController = app.get<ViewController>(ViewController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(viewController.getHello()).toBe('Hello World!');
    });
  });
});
