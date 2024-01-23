import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Any Title';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  //beforeEach: para cada bloco de teste vai usar essas configurações, execudado antes dos teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent); //fixture: ferramentas dom
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges(); //detectar mudancas
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe(mockTitle);

    component.title = 'Other title';
    fixture.detectChanges();
    expect(header.textContent).toBe('Other title');
  });
});
