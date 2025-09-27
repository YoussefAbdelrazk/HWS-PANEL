import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        {/* Header */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            <span className='font-serif'>Hawssa</span>
          </h1>
          <p className='text-sm font-medium text-gray-600 tracking-wider mb-8'>DANCE FITNESS</p>
          <h2 className='text-2xl font-bold text-gray-900'>Forgot Password?</h2>
          <p className='mt-2 text-sm text-gray-600'>
            No worries! Enter your email and we&apos;ll send you reset instructions.
          </p>
        </div>

        {/* Forgot Password Form */}
        <form className='mt-8 space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <Button
              type='submit'
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors'
            >
              Send Reset Instructions
            </Button>
          </div>

          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Remember your password?{' '}
              <Link href='/login' className='font-medium text-yellow-600 hover:text-yellow-500'>
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
