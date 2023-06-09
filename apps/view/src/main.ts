declare const module: any;
import { NestFactory } from '@nestjs/core';
import { ViewModule } from './view.module';
import { join } from 'path';
import * as hbs from 'hbs';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<any>(ViewModule);
  // app.useStaticAssets(join(__dirname, '../../..', '/resources/public'));
  // app.setBaseViewsDir(join(__dirname, '../../..', '/resources/view '));

  app.useStaticAssets(join(__dirname, '../../..', '/resources/public'));
  app.setBaseViewsDir(join(__dirname, '../../..', '/resources/view'));

  hbs.registerPartials(
    join(__dirname, '../../..', '/resources/view/partials/'),
  );
  hbs.registerHelper('toFixed', function (str: number | string) {
    if (!str) {
      return '0.0';
    }
    if (typeof str === 'number') return str.toFixed(1);
    return parseFloat(str).toFixed(1);
  });
  hbs.registerHelper('toDate', function (date: string) {
    const d = new Date(date);
    return `${d.getMonth()} ${d.getDate()},${d.getFullYear()}`;
  });
  app.setViewEngine('hbs');
  await app.listen(process.env.VIEW_MICRO);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`run on ${await app.getUrl()}`);
}
bootstrap();
