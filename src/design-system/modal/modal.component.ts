import { Component, Renderer2, Signal, input, model, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppTitleComponent } from '../title/title.component';
import { IconComponent } from '../icon/icon.component';
import { Item } from '../../shared/item-models.interface';
import { ButtonComponent } from '../button/button.component';

export interface Modal {
  isOpen: boolean;
  form: Item;
}

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrl: 'modal.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppTitleComponent, IconComponent, ButtonComponent]
})

export class ModalComponent {
  public isOpen = model<Modal['isOpen']>(false);
  public formSubmit = output();
  public form!: FormGroup;

  public newItem: boolean = true;
  private item!: Item | {};

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      color: new FormControl('#000000',Validators.required),
    });
  }

  openModal(initialValues?: Item) {
    if (initialValues) {
      this.item = initialValues;
      this.newItem = false;
      this.form.setValue({ name: initialValues.name, description: initialValues.description, color: initialValues.color });
    }
    this.isOpen.set(true);
  }

  closeModal() {
    this.form.reset({ name: '', description: '', color: '#000000'});
    this.newItem = true;
    this.item = {};
    this.isOpen.set(false);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit({...this.item, ...this.form.value});
      this.closeModal();
    }
  }
}
