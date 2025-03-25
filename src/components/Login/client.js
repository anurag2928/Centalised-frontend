import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uhbavshhmnywhenrpwlw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYmF2c2hobW55d2hlbnJwd2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjI3MzMsImV4cCI6MjA1MDc5ODczM30.FmoIf5TamtmmruDDnL-NY6FEiCC1TyqN0NdTqfzXgb0'
export const supabase = createClient(supabaseUrl, supabaseKey)