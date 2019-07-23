import {Component, Ref, Vue} from 'vue-property-decorator';
import {ElForm} from 'element-ui/types/form';

@Component
export class ElementUiController extends Vue {
  public ruleForm = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };
  public rules = {
    name: [
      {required: true, message: 'Please input Activity name', trigger: 'blur'},
      {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
    ],
    region: [
      {required: true, message: 'Please select Activity zone', trigger: 'change'},
    ],
    date1: [
      {type: 'date', required: true, message: 'Please pick a date', trigger: 'change'},
    ],
    date2: [
      {type: 'date', required: true, message: 'Please pick a time', trigger: 'change'},
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
      },
    ],
    resource: [
      {required: true, message: 'Please select activity resource', trigger: 'change'},
    ],
    desc: [
      {required: true, message: 'Please input activity form', trigger: 'blur'},
    ],
  };

  @Ref('ruleForm')
  private elForm: ElForm | undefined;

  public submitForm() {
    if (this.elForm) {
      this.elForm.validate((valid: any) => {
        if (valid) {
          this.$message({
            message: 'Congrats, this is a success message.',
            type: 'success',
          });
        } else {
          this.$message.error('Oops, this is a error message.');
          return false;
        }
      });
    }
  }

  public resetForm() {
    if (this.elForm) {
      this.elForm.resetFields();
    }
  }
}
