import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  }); 

  it('Deve ter o título AngularJestSetup', () => {
    expect(fixture.title).toEqual('AngularJestSetup');
  })

  it('add two numbers', () => {
    expect(fixture.sum(1,2)).toBe(5);
  });

});
