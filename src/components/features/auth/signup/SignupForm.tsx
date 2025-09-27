'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { signupSchema, type SignupFormData } from '@/lib/schemes/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, Mail, Phone, User, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const countryCodes = [
  { code: '+1', country: 'US/Canada' },
  { code: '+7', country: 'Russia/Kazakhstan' },
  { code: '+20', country: 'Egypt' },
  { code: '+27', country: 'South Africa' },
  { code: '+30', country: 'Greece' },
  { code: '+31', country: 'Netherlands' },
  { code: '+32', country: 'Belgium' },
  { code: '+33', country: 'France' },
  { code: '+34', country: 'Spain' },
  { code: '+39', country: 'Italy' },
  { code: '+40', country: 'Romania' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+44', country: 'UK' },
  { code: '+45', country: 'Denmark' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+49', country: 'Germany' },
  { code: '+51', country: 'Peru' },
  { code: '+52', country: 'Mexico' },
  { code: '+53', country: 'Cuba' },
  { code: '+54', country: 'Argentina' },
  { code: '+55', country: 'Brazil' },
  { code: '+56', country: 'Chile' },
  { code: '+57', country: 'Colombia' },
  { code: '+58', country: 'Venezuela' },
  { code: '+60', country: 'Malaysia' },
  { code: '+61', country: 'Australia' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+64', country: 'New Zealand' },
  { code: '+65', country: 'Singapore' },
  { code: '+66', country: 'Thailand' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+84', country: 'Vietnam' },
  { code: '+86', country: 'China' },
  { code: '+90', country: 'Turkey' },
  { code: '+91', country: 'India' },
  { code: '+92', country: 'Pakistan' },
  { code: '+93', country: 'Afghanistan' },
  { code: '+94', country: 'Sri Lanka' },
  { code: '+95', country: 'Myanmar' },
  { code: '+98', country: 'Iran' },
  { code: '+212', country: 'Morocco' },
  { code: '+213', country: 'Algeria' },
  { code: '+216', country: 'Tunisia' },
  { code: '+218', country: 'Libya' },
  { code: '+220', country: 'Gambia' },
  { code: '+221', country: 'Senegal' },
  { code: '+222', country: 'Mauritania' },
  { code: '+223', country: 'Mali' },
  { code: '+224', country: 'Guinea' },
  { code: '+225', country: 'Ivory Coast' },
  { code: '+226', country: 'Burkina Faso' },
  { code: '+227', country: 'Niger' },
  { code: '+228', country: 'Togo' },
  { code: '+229', country: 'Benin' },
  { code: '+230', country: 'Mauritius' },
  { code: '+231', country: 'Liberia' },
  { code: '+232', country: 'Sierra Leone' },
  { code: '+233', country: 'Ghana' },
  { code: '+234', country: 'Nigeria' },
  { code: '+235', country: 'Chad' },
  { code: '+236', country: 'Central African Republic' },
  { code: '+237', country: 'Cameroon' },
  { code: '+238', country: 'Cape Verde' },
  { code: '+239', country: 'São Tomé and Príncipe' },
  { code: '+240', country: 'Equatorial Guinea' },
  { code: '+241', country: 'Gabon' },
  { code: '+242', country: 'Republic of the Congo' },
  { code: '+243', country: 'Democratic Republic of the Congo' },
  { code: '+244', country: 'Angola' },
  { code: '+245', country: 'Guinea-Bissau' },
  { code: '+246', country: 'British Indian Ocean Territory' },
  { code: '+248', country: 'Seychelles' },
  { code: '+249', country: 'Sudan' },
  { code: '+250', country: 'Rwanda' },
  { code: '+251', country: 'Ethiopia' },
  { code: '+252', country: 'Somalia' },
  { code: '+253', country: 'Djibouti' },
  { code: '+254', country: 'Kenya' },
  { code: '+255', country: 'Tanzania' },
  { code: '+256', country: 'Uganda' },
  { code: '+257', country: 'Burundi' },
  { code: '+258', country: 'Mozambique' },
  { code: '+260', country: 'Zambia' },
  { code: '+261', country: 'Madagascar' },
  { code: '+262', country: 'Réunion' },
  { code: '+263', country: 'Zimbabwe' },
  { code: '+264', country: 'Namibia' },
  { code: '+265', country: 'Malawi' },
  { code: '+266', country: 'Lesotho' },
  { code: '+267', country: 'Botswana' },
  { code: '+268', country: 'Swaziland' },
  { code: '+269', country: 'Comoros' },
  { code: '+290', country: 'Saint Helena' },
  { code: '+291', country: 'Eritrea' },
  { code: '+297', country: 'Aruba' },
  { code: '+298', country: 'Faroe Islands' },
  { code: '+299', country: 'Greenland' },
  { code: '+350', country: 'Gibraltar' },
  { code: '+351', country: 'Portugal' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+353', country: 'Ireland' },
  { code: '+354', country: 'Iceland' },
  { code: '+355', country: 'Albania' },
  { code: '+356', country: 'Malta' },
  { code: '+357', country: 'Cyprus' },
  { code: '+358', country: 'Finland' },
  { code: '+359', country: 'Bulgaria' },
  { code: '+370', country: 'Lithuania' },
  { code: '+371', country: 'Latvia' },
  { code: '+372', country: 'Estonia' },
  { code: '+373', country: 'Moldova' },
  { code: '+374', country: 'Armenia' },
  { code: '+375', country: 'Belarus' },
  { code: '+376', country: 'Andorra' },
  { code: '+377', country: 'Monaco' },
  { code: '+378', country: 'San Marino' },
  { code: '+380', country: 'Ukraine' },
  { code: '+381', country: 'Serbia' },
  { code: '+382', country: 'Montenegro' },
  { code: '+383', country: 'Kosovo' },
  { code: '+385', country: 'Croatia' },
  { code: '+386', country: 'Slovenia' },
  { code: '+387', country: 'Bosnia and Herzegovina' },
  { code: '+389', country: 'Macedonia' },
  { code: '+420', country: 'Czech Republic' },
  { code: '+421', country: 'Slovakia' },
  { code: '+423', country: 'Liechtenstein' },
  { code: '+500', country: 'Falkland Islands' },
  { code: '+501', country: 'Belize' },
  { code: '+502', country: 'Guatemala' },
  { code: '+503', country: 'El Salvador' },
  { code: '+504', country: 'Honduras' },
  { code: '+505', country: 'Nicaragua' },
  { code: '+506', country: 'Costa Rica' },
  { code: '+507', country: 'Panama' },
  { code: '+508', country: 'Saint Pierre and Miquelon' },
  { code: '+509', country: 'Haiti' },
  { code: '+590', country: 'Guadeloupe' },
  { code: '+591', country: 'Bolivia' },
  { code: '+592', country: 'Guyana' },
  { code: '+593', country: 'Ecuador' },
  { code: '+594', country: 'French Guiana' },
  { code: '+595', country: 'Paraguay' },
  { code: '+596', country: 'Martinique' },
  { code: '+597', country: 'Suriname' },
  { code: '+598', country: 'Uruguay' },
  { code: '+599', country: 'Netherlands Antilles' },
  { code: '+670', country: 'East Timor' },
  { code: '+672', country: 'Antarctica' },
  { code: '+673', country: 'Brunei' },
  { code: '+674', country: 'Nauru' },
  { code: '+675', country: 'Papua New Guinea' },
  { code: '+676', country: 'Tonga' },
  { code: '+677', country: 'Solomon Islands' },
  { code: '+678', country: 'Vanuatu' },
  { code: '+679', country: 'Fiji' },
  { code: '+680', country: 'Palau' },
  { code: '+681', country: 'Wallis and Futuna' },
  { code: '+682', country: 'Cook Islands' },
  { code: '+683', country: 'Niue' },
  { code: '+684', country: 'American Samoa' },
  { code: '+685', country: 'Samoa' },
  { code: '+686', country: 'Kiribati' },
  { code: '+687', country: 'New Caledonia' },
  { code: '+688', country: 'Tuvalu' },
  { code: '+689', country: 'French Polynesia' },
  { code: '+690', country: 'Tokelau' },
  { code: '+691', country: 'Micronesia' },
  { code: '+692', country: 'Marshall Islands' },
  { code: '+850', country: 'North Korea' },
  { code: '+852', country: 'Hong Kong' },
  { code: '+853', country: 'Macau' },
  { code: '+855', country: 'Cambodia' },
  { code: '+856', country: 'Laos' },
  { code: '+880', country: 'Bangladesh' },
  { code: '+886', country: 'Taiwan' },
  { code: '+960', country: 'Maldives' },
  { code: '+961', country: 'Lebanon' },
  { code: '+962', country: 'Jordan' },
  { code: '+963', country: 'Syria' },
  { code: '+964', country: 'Iraq' },
  { code: '+965', country: 'Kuwait' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+967', country: 'Yemen' },
  { code: '+968', country: 'Oman' },
  { code: '+970', country: 'Palestine' },
  { code: '+971', country: 'UAE' },
  { code: '+972', country: 'Israel' },
  { code: '+973', country: 'Bahrain' },
  { code: '+974', country: 'Qatar' },
  { code: '+975', country: 'Bhutan' },
  { code: '+976', country: 'Mongolia' },
  { code: '+977', country: 'Nepal' },
  { code: '+992', country: 'Tajikistan' },
  { code: '+993', country: 'Turkmenistan' },
  { code: '+994', country: 'Azerbaijan' },
  { code: '+995', country: 'Georgia' },
  { code: '+996', country: 'Kyrgyzstan' },
  { code: '+998', country: 'Uzbekistan' },
];

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: undefined,
      countryCode: '',
      mobileNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const { errors } = form.formState;

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
    // Handle signup logic here
  };

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          {/* Name Fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-gray-700'>First Name *</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500' />
                      <Input
                        placeholder='Enter your first name'
                        className='pl-10 h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                        error={!!errors.firstName}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-gray-700'>Last Name *</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500' />
                      <Input
                        placeholder='Enter your last name'
                        className='pl-10 h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                        error={!!errors.lastName}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Birth Date and Gender */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='birthDate'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormControl></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='gender'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-gray-700'>Gender *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'>
                        <div className='flex items-center'>
                          <Users className='h-4 w-4 text-yellow-500 mr-2' />
                          <SelectValue placeholder='Select your gender' />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Mobile Number */}
          <FormField
            control={form.control}
            name='mobileNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>Mobile Number *</FormLabel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <FormField
                    control={form.control}
                    name='countryCode'
                    render={({ field: countryField }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={countryField.onChange}
                            defaultValue={countryField.value}
                          >
                            <SelectTrigger className='h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'>
                              <div className='flex items-center'>
                                <Phone className='h-4 w-4 text-yellow-500 mr-2' />
                                <SelectValue placeholder='Code' />
                              </div>
                            </SelectTrigger>
                            <SelectContent className='max-h-60'>
                              {countryCodes.map(country => (
                                <SelectItem key={country.code} value={country.code}>
                                  {country.code} {country.country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='md:col-span-2'>
                    <FormControl>
                      <Input
                        placeholder='Enter your mobile number'
                        className='h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                        error={!!errors.mobileNumber}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>Email *</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500' />
                    <Input
                      placeholder='Enter your email'
                      type='email'
                      className='pl-10 h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                      error={!!errors.email}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-gray-700'>Password *</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500' />
                      <Input
                        placeholder='Create a password'
                        type={showPassword ? 'text' : 'password'}
                        className='pl-10 pr-10 h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                        error={!!errors.password}
                        {...field}
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-600'
                      >
                        {showPassword ? (
                          <EyeOff className='h-4 w-4' />
                        ) : (
                          <Eye className='h-4 w-4' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-gray-700'>
                    Confirm Password *
                  </FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500' />
                      <Input
                        placeholder='Confirm your password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        className='pl-10 pr-10 h-12 border-gray-300 focus:ring-yellow-500 focus:border-yellow-500'
                        error={!!errors.confirmPassword}
                        {...field}
                      />
                      <button
                        type='button'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-600'
                      >
                        {showConfirmPassword ? (
                          <EyeOff className='h-4 w-4' />
                        ) : (
                          <Eye className='h-4 w-4' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Terms and Conditions */}
          <div className='flex items-start space-x-3'>
            <Checkbox
              id='terms'
              className='mt-1 border-gray-300 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500'
            />
            <label htmlFor='terms' className='text-sm text-gray-700'>
              I agree to the{' '}
              <Link href='#' className='text-yellow-600 hover:text-yellow-500 underline'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href='#' className='text-yellow-600 hover:text-yellow-500 underline'>
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            className='w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg text-lg transition-colors'
          >
            Create Trainer Account
          </Button>
        </form>
      </Form>

      <div className='mt-6 text-center'>
        <p className='text-sm text-gray-600'>
          Already have an account?{' '}
          <Link
            href='/login'
            className='font-medium text-yellow-600 hover:text-yellow-500 underline underline-offset-4'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
