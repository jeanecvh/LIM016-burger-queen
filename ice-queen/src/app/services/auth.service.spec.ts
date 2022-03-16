import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuth} from '@angular/fire/compat/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ],
      providers: [
        AngularFireAuth,
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('logs users in', async () => {
    const randomString = () =>  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const email = `${randomString()}@${randomString()}.test`;
    const password = randomString();

    const result = await service.register(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);
  });

  /*

  it('does not log users in when the email and password are invalid', async () => {
    const loginResult = await service.login('invalid@email.invalid', 'password');
    expect(loginResult).toEqual(false);
  });

  it('verify the user is log', () => {
    const getUser = service.getUserLogged()
    expect(getUser).toBeNull()
  })*/
});
