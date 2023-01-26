import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  const routerSpy = {navigate:jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ FeedbackComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark name as invalid when it has only one character', () => {
    const ctrl = component.fbForm.get('name');
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('cancel navigates to home page', () => {
    //const routerSpy = spyOn(router, "navigate");
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should have a headerText property - TEHTÄVÄ', () => {
    expect(component.headerText).toBeDefined();
  });

  it('should have headerText as Give feedback - TEHTÄVÄ', () => {
    expect(component.headerText).toEqual('Give feedback');
  });

  it('submit button disabled on startup - TEHTÄVÄ', () => {
    const addButton = fixture.debugElement.nativeElement.querySelector('#submitButton');
    expect(addButton.disabled).toBeTruthy();
   });

   it('email should be invalid when field has invalid email - TEHTÄVÄ', () => {
    const email = component.fbForm.get('email');
    email?.setValue('väärä.sähkoposti.fi')
    fixture.detectChanges();
    expect(component.email?.valid).toBeFalsy();
  });

  it('form should be valid when filled correctly - TEHTÄVÄ', () => {
    const title = component.fbForm.get('title');
    const description = component.fbForm.get('description');
    const name = component.fbForm.get('name');
    const email = component.fbForm.get('email');
    const phone = component.fbForm.get('phone');
    title?.setValue('esimerkki')
    description?.setValue('hei')
    name?.setValue('Jonne')
    email?.setValue('esi.merkki@mail.com')
    phone?.setValue('0001112223')
    expect(component.fbForm.valid).toBeTruthy();
  });
  
});


  
