import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { items } from '../../../assets/data/apiResponse';
import { RestApiService } from '../../services/rest-api.service'


const ELEMENT_DATA = [
  {name: 'Narendra Modi', category: 'PEP', country: 'India', source: 'World Politicians', riskStatus: 'High Risk'},
  {name: 'Narendra Modi', category: 'PEP', country: 'India', source: 'World Politicians', riskStatus: 'High Risk'},
  {name: 'Narendra Modi', category: 'PEP', country: 'India', source: 'World Politicians', riskStatus: 'High Risk'},
  {name: 'Narendra Modi', category: 'PEP', country: 'India', source: 'World Politicians', riskStatus: 'High Risk'}
];


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  columns = [
    { columnDef: 'Name', header: 'Name', cell: (element: any) => `${element.name}`},
    { columnDef: 'Category', header: 'Category', cell: (element: any) => `${element.category}`},
    { columnDef: 'Country', header: 'Country', cell: (element: any) => `${element.country}`},
    { columnDef: 'Source', header: 'Source', cell: (element: any) => `${element.source}`},
    { columnDef: 'Risk Status', header: 'Risk Status', cell: (element: any) => `${element.riskStatus}`},
  ];

  displayedColumns: string[] = ['Name', 'Category', 'Country', 'Source', 'Risk Status'];
  dataSource: any = ELEMENT_DATA;

  countries = ['India', 'UK', 'USA', 'China', 'Russia', 'Japan', 'Australia'];
  states = ['A', 'B', 'C', 'D', 'E'];

  currentTab = 'Entity Search';

  resultData = [];

  detailsForm: FormGroup;

  showSearchResults = false;

  formType = 'individual';

  // displayedColumns: any;

  // data = [];

  // columns = [
  //   { columnDef: 'sr_no', header: 'Sr No.', cell: (element: any) => `${element.sr_no}`},
  //   { columnDef: 'date', header: 'Date', cell: (element: any) => `${element.date}`},
  //   { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}`},
  //   { columnDef: 'count', header: 'Count', cell: (element: any) => `${element.count}`},
  // ];

  constructor(private service: RestApiService) { 
    console.log(items);

    // this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      type: new FormControl('Individual', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
  }

  onSearch() {
    console.log(this.detailsForm.value);
    if(this.detailsForm.valid) {
      console.log('form is valid');
      let selected_entity_type = this.detailsForm.value.type;
      selected_entity_type = selected_entity_type.toLowerCase() === 'legal entity' ? 'organisation' : "individual";
      let final_data = [];
      this.detailsForm.reset();
      this.service.getResults().subscribe((data:any) => {
        let res = data.items;
        // console.log(res);
        res.forEach((element) => {
          // console.log(JSON.parse(element.request.body.raw));
          let parsedData = JSON.parse(element.request.body.raw);
          let received_entity_type = parsedData.type[0];
          // console.log(selected_entity_type.toLowerCase());
          // console.log(received_entity_type.toLowerCase());
          if(selected_entity_type.toLowerCase() === received_entity_type.toLowerCase()){
            final_data.push(JSON.parse(element.request.body.raw));
          }
        });
        console.log(final_data);
        this.resultData = [];
        final_data.forEach((element) => {
          if(element.type[0].toLowerCase() === 'individual'){
            console.log(element.type[0].toLowerCase());
            let tempData = {
              name: element.name[0],
              category: element.category[0],
              country: element.country[0],
              source: element.source[0],
              riskStatus: element.risk[0]
            }
            this.resultData.push(tempData);
            console.log(this.resultData);

            this.columns = [
              { columnDef: 'Name', header: 'Name', cell: (element: any) => `${element.name}`},
              { columnDef: 'Category', header: 'Category', cell: (element: any) => `${element.category}`},
              { columnDef: 'Country', header: 'Country', cell: (element: any) => `${element.country}`},
              { columnDef: 'Source', header: 'Source', cell: (element: any) => `${element.source}`},
              { columnDef: 'Risk Status', header: 'Risk Status', cell: (element: any) => `${element.riskStatus}`},
            ];
          
            this.displayedColumns = ['Name', 'Category', 'Country', 'Source', 'Risk Status'];
            this.dataSource = this.resultData;
          }
          else {
            console.log(element.type[0].toLowerCase());
            let tempData = {
              company_name: element.name[0],
              company_type: element.company_type[0],
              company_id: element.company_id[0],
              incorporation_date: element.category[0],
              country: element.country[0],
              riskStatus: element.risk[0]
            }
            this.resultData.push(tempData);
            console.log(this.resultData);

            this.columns = [
              { columnDef: 'Company Name', header: 'Company Name', cell: (element: any) => `${element.company_name}`},
              { columnDef: 'Company Type', header: 'Company Type', cell: (element: any) => `${element.company_type}`},
              { columnDef: 'Company ID', header: 'Company ID', cell: (element: any) => `${element.company_id}`},
              { columnDef: 'Incorporation Date', header: 'Incorporation Date', cell: (element: any) => `${element.incorporation_date}`},
              { columnDef: 'Country', header: 'Country', cell: (element: any) => `${element.country}`},
              { columnDef: 'Risk Status', header: 'Risk Status', cell: (element: any) => `${element.riskStatus}`},
            ];
          
            this.displayedColumns = ['Company Name', 'Company Type', 'Company ID', 'Incorporation Date', 'Country', 'Risk Status'];
            this.dataSource = this.resultData;
          }
        });
        this.showSearchResults = true;
        console.log(this.dataSource);
        // this.detailsForm.reset();
      }, (err) => {
        console.log('Error while fetching data from API', err);
      })
    }
    
  }


  entityChanged(name) {
    console.log(name);
    if(name.toLowerCase() === 'legal entity') {
      console.log('****');
      this.formType = 'legal entity';
      this.detailsForm = new FormGroup({
        type: new FormControl('Legal Entity', [Validators.required]),
        company_name: new FormControl('', [Validators.required]),
        company_id: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        jurisdiction: new FormControl('', [Validators.required]),
      })
    }
    else {
      this.formType = 'individual';
      this.detailsForm = new FormGroup({
        type: new FormControl('Individual', [Validators.required]),
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
      });
    }
  }

}
