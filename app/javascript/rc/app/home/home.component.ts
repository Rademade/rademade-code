import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkModel } from 'models';
import { LinksApiService } from '@shared/services/api/links.api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private links: LinkModel[];
  private linksForm: FormGroup;
  private currentIndex: number;
  private currentId: number;
  private editMode: boolean = false;
  private toggleFormState: boolean = false;

  constructor(
    public linksService: LinksApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getLinks();

    this.linksForm = this.formBuilder.group({
      title: '',
      href: ''
    });

  };

  getLinks() {
    this.linksService.index().subscribe((links) => {
      this.links = links;
    });
  }

  updateLink() {
    this.linksService.update(this.linksForm.value, this.currentId).subscribe(
      () => {
        this.getLinks();
        this.editMode = false;
      }
    );
    this.linksForm.reset();
    this.toggleForm();
  }

  editLink(id: number, index: number) {
    this.currentIndex = index;
    this.currentId = id;
    this.editMode = true;
    this.toggleForm();
    this.linksForm.patchValue(this.links[this.currentIndex]);
  }

  addLink() {
    this.linksService.create(this.linksForm.value).subscribe((link) => {
      this.links.push(link);
    });
    this.linksForm.reset();
    this.toggleForm();
  }

  destroyLink(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.links.splice(index, 1);
      this.linksService.destroy(id).subscribe();
    } else {
      return false;
    }
  }

  toggleForm() {
    this.toggleFormState = !this.toggleFormState;
  }
  cancelForm() {
    this.editMode = false;
  }
}
